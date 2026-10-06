(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= Terremoto ================= */
  const quakeTargets = [
    document.getElementById('shell'),
    document.getElementById('bg'),
    document.getElementById('beam-layer')
  ];

  const motionMap = {
    shaky: (i, k) => ({
      x: (Math.random() - 0.5) * k * 2,
      y: (Math.random() - 0.5) * k * 2,
      rotate: (Math.random() - 0.5) * k * 0.05
    }),
    rotate: (i, k) => ({
      x: Math.sin(i * 0.9) * k,
      y: Math.cos(i * 1.3) * k * 0.6,
      rotate: Math.sin(i * 1.6) * k * 0.08
    }),
    horizontal: (i, k) => ({ x: Math.sin(i * 2) * k * 1.5, y: 0, rotate: 0 }),
    diagonal: (i, k) => ({
      x: Math.sin(i * 1.5) * k,
      y: Math.cos(i * 1.5) * k,
      rotate: Math.sin(i * 1.2) * k * 0.05
    })
  };

  function triggerEarthquake({ duration = 1200, intensity = 12, speed = 30, mode = 'shaky' } = {}) {
    if (reduceMotion) return;

    const motion = motionMap[mode] || motionMap.shaky;
    const steps = Math.max(1, Math.ceil(duration / speed));
    let step = 0;

    // cada chamada cancela a anterior para as intensidades não se somarem
    clearTimeout(triggerEarthquake.timer);

    function animate() {
      // a intensidade decai ao longo do abalo
      const k = intensity * (1 - step / steps);
      const f = motion(step, k);
      const transform = `translate(${f.x}px, ${f.y}px) rotate(${f.rotate}deg)`;
      quakeTargets.forEach((el) => { el.style.transform = transform; });

      if (++step < steps) {
        triggerEarthquake.timer = setTimeout(animate, speed);
        return;
      }
      quakeTargets.forEach((el) => { el.style.transform = ''; });
    }

    animate();
  }

  /* ================= Menu: prédio ================= */
  const toggle = document.getElementById('menu-toggle');
  const building = document.getElementById('building');
  const wrapper = document.getElementById('wrapper');
  let menuOpen = false;
  let thudTimer;
  let projectsFaqTimer;

  // andares decorativos acima dos links
  const upper = document.getElementById('bld-upper');
  for (let r = 0; r < 24; r += 1) {
    const row = document.createElement('div');
    row.className = 'bld-row';
    for (let w = 0; w < 4; w += 1) {
      const win = document.createElement('i');
      if (Math.random() > 0.55) win.className = 'lit';
      row.appendChild(win);
    }
    upper.appendChild(row);
  }

  function updateToggleLabel() {
    toggle.setAttribute('aria-label', window.I18N.t(menuOpen ? 'menu.close' : 'menu.open'));
  }
  document.addEventListener('langchange', updateToggleLabel);
  updateToggleLabel();

  function setMenu(open) {
    menuOpen = open;
    clearTimeout(thudTimer);
    playEarthquakeSound(open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    updateToggleLabel();
    building.inert = !open;

    if (open) {
      building.classList.remove('closing');
      building.classList.add('opening');
      // o prédio arrastado treme o chão e a pancada final é mais forte
      triggerEarthquake({ duration: 900, intensity: 5, speed: 25, mode: 'horizontal' });
      thudTimer = setTimeout(() => {
        triggerEarthquake({ duration: 900, intensity: 16, speed: 25, mode: 'shaky' });
      }, 880);
    } else {
      building.classList.remove('opening', 'open');
      building.classList.add('closing');
      triggerEarthquake({ duration: 700, intensity: 6, speed: 25, mode: 'rotate' });
    }
  }

  function scrollToHash(hash, behavior = reduceMotion ? 'auto' : 'smooth') {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (hash && !target) return;
    const top = target
      ? target.getBoundingClientRect().top - wrapper.getBoundingClientRect().top + wrapper.scrollTop
      : 0;
    wrapper.scrollTo({ top, behavior });
  }

  function navigateTo(target) {
    clearTimeout(projectsFaqTimer);
    if (target.matches('.faq-question')) setFaqQuestionOpen(target, true);
    if (window.location.hash !== `#${target.id}`) {
      window.history.pushState(null, '', `#${target.id}`);
    }
    scrollToHash(`#${target.id}`);
  }

  building.addEventListener('animationend', (e) => {
    if (e.animationName === 'bld-in') {
      building.classList.remove('opening');
      building.classList.add('open');
    } else if (e.animationName === 'bld-out') {
      building.classList.remove('closing');
    }
  });

  toggle.addEventListener('click', () => setMenu(!menuOpen));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) setMenu(false); });
  window.addEventListener('popstate', () => scrollToHash(window.location.hash));

  building.querySelectorAll('a.floor').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      navigateTo(target);
      setMenu(false);
    });
  });

  document.querySelectorAll('.content a[href^="#"]:not([href="#"])').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      navigateTo(target);
      if (link.id === 'projects-cta') {
        projectsFaqTimer = setTimeout(() => {
          const projectsQuestion = document.getElementById('faq-question-1');
          if (projectsQuestion) setFaqQuestionOpen(projectsQuestion, true);
        }, 1500);
      }
    });
  });

  /* ================= FAQ: acordeão ================= */
  const faqQuestions = document.querySelectorAll('.faq-question');
  const soundToggle = document.getElementById('sound-toggle');
  const faqSoundStatus = document.getElementById('faq-sound-status');
  const AudioContextClass = window.AudioContext;
  let soundEnabled = false;
  let faqAudioContext;
  let quakeNoiseBuffer;

  function updateSoundToggle() {
    const label = window.I18N.t(soundEnabled ? 'sound.disable' : 'sound.enable');
    soundToggle.setAttribute('aria-pressed', String(soundEnabled));
    soundToggle.setAttribute('aria-label', label);
    soundToggle.title = label;
  }
  updateSoundToggle();

  async function getAudioContext() {
    if (!AudioContextClass) throw new Error('Web Audio API indisponível.');
    faqAudioContext = faqAudioContext || new AudioContextClass();
    if (faqAudioContext.state === 'suspended') await faqAudioContext.resume();
    return faqAudioContext;
  }

  function handleSoundError(error) {
    soundEnabled = false;
    updateSoundToggle();
    faqSoundStatus.textContent = window.I18N.t('sound.error');
    console.error(window.I18N.t('sound.error'), error);
  }

  async function playEarthquakeSound(opening) {
    if (!soundEnabled) return;

    try {
      const audio = await getAudioContext();
      if (!quakeNoiseBuffer) {
        const frameCount = Math.floor(audio.sampleRate * 1.2);
        quakeNoiseBuffer = audio.createBuffer(1, frameCount, audio.sampleRate);
        const samples = quakeNoiseBuffer.getChannelData(0);
        for (let i = 0; i < frameCount; i += 1) samples[i] = Math.random() * 2 - 1;
      }

      const start = audio.currentTime + 0.02;
      const noise = audio.createBufferSource();
      const filter = audio.createBiquadFilter();
      const noiseGain = audio.createGain();
      noise.buffer = quakeNoiseBuffer;
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(opening ? 850 : 700, start);
      filter.frequency.exponentialRampToValueAtTime(opening ? 320 : 260, start + 1.1);
      noiseGain.gain.setValueAtTime(0.0001, start);
      noiseGain.gain.linearRampToValueAtTime(0.16, start + 0.08);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, start + 1.15);
      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(audio.destination);
      noise.start(start);
      noise.stop(start + 1.2);

      const rumble = audio.createOscillator();
      const rumbleGain = audio.createGain();
      rumble.type = 'sine';
      rumble.frequency.setValueAtTime(opening ? 78 : 68, start);
      rumble.frequency.exponentialRampToValueAtTime(42, start + 1.05);
      rumbleGain.gain.setValueAtTime(0.0001, start);
      rumbleGain.gain.linearRampToValueAtTime(0.055, start + 0.1);
      rumbleGain.gain.exponentialRampToValueAtTime(0.0001, start + 1.1);
      rumble.connect(rumbleGain);
      rumbleGain.connect(audio.destination);
      rumble.start(start);
      rumble.stop(start + 1.15);

      const creak = audio.createOscillator();
      const creakFilter = audio.createBiquadFilter();
      const creakGain = audio.createGain();
      creak.type = 'triangle';
      creak.frequency.setValueAtTime(opening ? 190 : 145, start + 0.06);
      creak.frequency.exponentialRampToValueAtTime(opening ? 115 : 95, start + 0.9);
      creakFilter.type = 'lowpass';
      creakFilter.frequency.value = 420;
      creakGain.gain.setValueAtTime(0.0001, start);
      creakGain.gain.linearRampToValueAtTime(0.045, start + 0.12);
      creakGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.95);
      creak.connect(creakFilter);
      creakFilter.connect(creakGain);
      creakGain.connect(audio.destination);
      creak.start(start);
      creak.stop(start + 1);
    } catch (error) {
      handleSoundError(error);
    }
  }

  async function playElevatorSounds() {
    try {
      const audio = await getAudioContext();

      const start = audio.currentTime + 0.03;
      const chimeGain = audio.createGain();
      chimeGain.gain.setValueAtTime(0.0001, start);
      chimeGain.gain.linearRampToValueAtTime(0.075, start + 0.025);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.65);
      chimeGain.connect(audio.destination);

      [659.25, 880].forEach((frequency, index) => {
        const oscillator = audio.createOscillator();
        const noteStart = start + index * 0.12;
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        oscillator.connect(chimeGain);
        oscillator.start(noteStart);
        oscillator.stop(noteStart + 0.42);
      });

      const motorStart = start + 0.42;
      const motor = audio.createOscillator();
      const motorFilter = audio.createBiquadFilter();
      const motorGain = audio.createGain();
      motor.type = 'triangle';
      motor.frequency.setValueAtTime(105, motorStart);
      motor.frequency.exponentialRampToValueAtTime(58, motorStart + 0.8);
      motorFilter.type = 'lowpass';
      motorFilter.frequency.value = 240;
      motorGain.gain.setValueAtTime(0.0001, motorStart);
      motorGain.gain.linearRampToValueAtTime(0.025, motorStart + 0.08);
      motorGain.gain.exponentialRampToValueAtTime(0.0001, motorStart + 0.82);
      motor.connect(motorFilter);
      motorFilter.connect(motorGain);
      motorGain.connect(faqAudioContext.destination);
      motor.start(motorStart);
      motor.stop(motorStart + 0.84);
    } catch (error) {
      handleSoundError(error);
    }
  }

  soundToggle.disabled = !AudioContextClass;
  if (!AudioContextClass) faqSoundStatus.textContent = window.I18N.t('faq.soundUnsupported');
  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    faqSoundStatus.textContent = '';
    updateSoundToggle();
  });
  document.addEventListener('langchange', updateSoundToggle);

  function setFaqQuestionOpen(button, open) {
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    faqQuestions.forEach((question) => {
      const answer = document.getElementById(question.getAttribute('aria-controls'));
      const shouldOpen = question === button && open;
      question.setAttribute('aria-expanded', String(shouldOpen));
      answer.setAttribute('aria-hidden', String(!shouldOpen));
      answer.inert = !shouldOpen;
      question.closest('.faq-item').classList.toggle('is-open', shouldOpen);
    });

    if (open && !wasOpen && soundEnabled && window.matchMedia('(max-width: 760px)').matches) {
      playElevatorSounds();
    }
  }

  faqQuestions.forEach((button) => {
    button.addEventListener('click', () => {
      clearTimeout(projectsFaqTimer);
      setFaqQuestionOpen(button, button.getAttribute('aria-expanded') !== 'true');
    });
  });

  document.querySelectorAll('.job-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      const details = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(open));
      details.setAttribute('aria-hidden', String(!open));
      details.inert = !open;
      button.closest('.job').classList.toggle('is-open', open);
    });
  });

  /* ================= Cursor atrás da viga ================= */
  const cursor = document.getElementById('cursor');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.body.classList.add('custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      // sobre o prédio e o botão usa-se o cursor nativo
      const native = e.target.closest('.building, .menu-toggle');
      cursor.classList.toggle('visible', !native);
    });
    document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
  }

  /* ================= Fundo: fim de tarde ================= */
  const canvas = document.getElementById('skyline');
  const ctx = canvas.getContext('2d');

  function rng(seed) {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  }

  function drawCrane(x, baseY, height, color) {
    const jib = height * 0.75;
    const top = baseY - height;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    // mastro treliçado
    const mw = 10;
    ctx.strokeRect(x - mw / 2, top, mw, height);
    ctx.beginPath();
    for (let y = top; y < baseY; y += mw * 1.5) {
      ctx.moveTo(x - mw / 2, y);
      ctx.lineTo(x + mw / 2, y + mw * 1.5);
      ctx.moveTo(x + mw / 2, y);
      ctx.lineTo(x - mw / 2, y + mw * 1.5);
    }
    ctx.stroke();

    // lança e contrapeso
    ctx.fillRect(x - jib * 0.3, top - 4, jib * 1.3, 5);
    ctx.fillRect(x - jib * 0.3, top, 14, 18);
    ctx.beginPath();
    ctx.moveTo(x, top - 24);
    ctx.lineTo(x - jib * 0.3, top - 4);
    ctx.moveTo(x, top - 24);
    ctx.lineTo(x + jib, top - 4);
    ctx.stroke();
    ctx.fillRect(x - 3, top - 28, 6, 24);

    // cabo e carga
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + jib * 0.7, top);
    ctx.lineTo(x + jib * 0.7, top + height * 0.35);
    ctx.stroke();
    ctx.fillRect(x + jib * 0.7 - 9, top + height * 0.35, 18, 9);
  }

  function drawBuilding(b, color, windowAlpha, rand, baseY) {
    const top = baseY - b.h;
    ctx.fillStyle = color;
    ctx.fillRect(b.x, top, b.w, b.h + 2);

    if (b.antenna) ctx.fillRect(b.x + b.w / 2 - 1, top - b.antenna, 2, b.antenna);

    if (windowAlpha > 0) {
      const ww = 4, gap = 9;
      for (let wy = top + 10; wy < baseY - 10; wy += gap + 4) {
        for (let wx = b.x + 6; wx < b.x + b.w - 8; wx += gap) {
          if (rand() > 0.72) {
            ctx.fillStyle = `rgba(255, 205, 110, ${windowAlpha * (0.5 + rand() * 0.5)})`;
            ctx.fillRect(wx, wy, ww, 6);
          }
        }
      }
    }
  }

  // prédio em obra: esqueleto de pilares, lajes e vigas vermelhas
  function drawSkeleton(x, baseY, w, floors, floorH) {
    const top = baseY - floors * floorH;
    ctx.fillStyle = 'rgba(12, 8, 24, 0.95)';
    ctx.fillRect(x, baseY - floorH * 2, w, floorH * 2 + 2);
    ctx.strokeStyle = '#120a22';
    ctx.lineWidth = 3;
    for (let i = 0; i <= 3; i += 1) {
      const px = x + (w / 3) * i;
      ctx.beginPath();
      ctx.moveTo(px, top);
      ctx.lineTo(px, baseY);
      ctx.stroke();
    }
    for (let f = 0; f <= floors; f += 1) {
      const y = top + f * floorH;
      ctx.fillStyle = f % 3 === 0 ? 'rgba(200, 60, 40, 0.9)' : '#120a22';
      ctx.fillRect(x - 4, y, w + 8, 4);
    }
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let f = 0; f < floors; f += 2) {
      ctx.moveTo(x, top + f * floorH);
      ctx.lineTo(x + w / 3, top + (f + 1) * floorH);
    }
    ctx.stroke();
  }

  function drawScene() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const horizon = h * 0.8;

    // céu
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, '#150f38');
    sky.addColorStop(0.3, '#4a2570');
    sky.addColorStop(0.58, '#c2476a');
    sky.addColorStop(0.82, '#ff8a4c');
    sky.addColorStop(1, '#ffd27a');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    const rand = rng(42);

    // estrelas
    for (let i = 0; i < 70; i += 1) {
      ctx.fillStyle = `rgba(255, 255, 255, ${rand() * 0.6})`;
      ctx.fillRect(rand() * w, rand() * horizon * 0.4, 1.5, 1.5);
    }

    // sol
    const sx = w * 0.72, sy = horizon - h * 0.04, sr = Math.min(w, h) * 0.09;
    const glow = ctx.createRadialGradient(sx, sy, sr * 0.3, sx, sy, sr * 5);
    glow.addColorStop(0, 'rgba(255, 220, 140, 0.85)');
    glow.addColorStop(0.3, 'rgba(255, 150, 90, 0.35)');
    glow.addColorStop(1, 'rgba(255, 120, 80, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#fff1c2';
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();

    // nuvens
    for (let i = 0; i < 9; i += 1) {
      const cx = rand() * w, cy = horizon * (0.3 + rand() * 0.5);
      ctx.fillStyle = `rgba(${200 + rand() * 55 | 0}, ${90 + rand() * 60 | 0}, ${120 + rand() * 40 | 0}, 0.28)`;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 90 + rand() * 140, 6 + rand() * 9, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // camadas de prédios (distante -> próxima)
    const layers = [
      { color: 'rgba(120, 60, 110, 0.75)', min: 0.1, max: 0.32, wMin: 30, wMax: 60, win: 0, seed: 1 },
      { color: 'rgba(68, 34, 88, 0.9)', min: 0.14, max: 0.42, wMin: 36, wMax: 76, win: 0.35, seed: 2 },
      { color: '#1b1032', min: 0.12, max: 0.5, wMin: 44, wMax: 96, win: 0.8, seed: 3 }
    ];

    layers.forEach((layer) => {
      const r = rng(layer.seed * 977);
      const r2 = rng(layer.seed * 31);
      let x = -20;
      while (x < w) {
        const bw = layer.wMin + r() * (layer.wMax - layer.wMin);
        const bh = h * (layer.min + r() * (layer.max - layer.min));
        const b = { x, w: bw, h: bh, antenna: r() > 0.8 ? 16 + r() * 30 : 0 };
        drawBuilding(b, layer.color, layer.win, r2, horizon + 4);
        x += bw + r() * 6;
      }
    });

    // obras: guindastes e esqueletos
    const cranes = [[0.12, 0.62], [0.55, 0.52], [0.9, 0.58]];
    cranes.forEach(([cx, ch]) => drawCrane(w * cx, horizon, h * ch * 0.7, '#120a22'));
    drawSkeleton(w * 0.28, horizon, Math.min(120, w * 0.12), 9, 22);
    drawSkeleton(w * 0.8, horizon, Math.min(100, w * 0.1), 7, 22);

    // chão
    const ground = ctx.createLinearGradient(0, horizon, 0, h);
    ground.addColorStop(0, '#2a1536');
    ground.addColorStop(1, '#0c0716');
    ctx.fillStyle = ground;
    ctx.fillRect(0, horizon, w, h - horizon);

    // tapume do canteiro
    ctx.fillStyle = '#120a22';
    for (let x = 0; x < w; x += 46) ctx.fillRect(x, horizon + 6, 3, 24);
    ctx.fillRect(0, horizon + 10, w, 3);
    ctx.fillRect(0, horizon + 24, w, 3);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawScene, 120);
  });
  drawScene();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
