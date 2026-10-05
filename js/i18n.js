(() => {
  'use strict';

  const dict = {
    pt: {
      'doc.title': 'Felipe Frade — Desenvolvedor Full Stack',
      'doc.desc': 'Portfólio de Felipe Frade, desenvolvedor Full Stack que constrói e arquiteta sistemas e soluções.',
      'menu.label': 'Menu principal',
      'menu.open': 'Abrir menu',
      'menu.close': 'Fechar menu',
      'floor.5': '5º andar', 'floor.4': '4º andar', 'floor.3': '3º andar', 'floor.2': '2º andar', 'floor.1': '1º andar',
      'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.skills': 'Habilidades', 'nav.experience': 'Experiência', 'nav.contact': 'Contato',
      'hero.kicker': '// obra em andamento',
      'hero.role': 'Desenvolvedor Full Stack',
      'hero.lead': 'Eu <strong>construo</strong> aplicações web — da fundação à fachada — com experiência em liderança técnica, ambientes ágeis e equipes internacionais.',
      'hero.cta1': 'Ver experiência',
      'hero.cta2': 'Contratar a obra',
      'about.kicker': '// 01 · planta baixa',
      'about.p1': 'Desenvolvedor Full Stack com experiência no desenvolvimento e manutenção de aplicações web, na evolução de sistemas legados e na criação de arquiteturas front-end mais modernas.',
      'about.p2': 'Atuei como líder técnico de uma equipe de 5 pessoas, em ambientes ágeis e em colaboração com equipes internacionais. Baseado em Guaíba-RS.',
      'skills.kicker': '// 02 · materiais e ferramentas',
      'skills.main': 'Stack principal',
      'skills.secondary': 'Stacks secundárias',
      'skills.languages': 'Idiomas',
      'lang.pt': 'Português — nativo',
      'lang.en': 'Inglês — fluente',
      'exp.kicker': '// 03 · trajetória',
      'job1.role': 'Desenvolvedor Front-end Pleno',
      'job1.b1': 'Manutenção de aplicações <strong>Angular</strong> legadas e desenvolvimento de uma nova arquitetura front-end mais moderna e alinhada às necessidades do produto;',
      'job1.b2': 'Colaboração com equipes internacionais;',
      'job1.b3': 'Utilização de serviços da <strong>AWS</strong> e ferramentas de IA generativa.',
      'job2.role': 'Líder Técnico (Tech Lead)',
      'job2.b1': 'Liderança técnica de uma equipe de 5 pessoas;',
      'job2.b2': 'Mentoria e suporte técnico a desenvolvedores juniores;',
      'job2.b3': 'Gestão de pipelines e deploys utilizando <strong>Docker</strong> e <strong>Jenkins</strong>;',
      'job2.b4': 'Garantia da estabilidade dos sistemas em ambientes de homologação e produção;',
      'job2.b5': 'Atuação em parceria com a Product Manager no planejamento de sprints, refinamento de requisitos, priorização de demandas e gestão do backlog no <strong>Jira</strong>.',
      'job3.role': 'Desenvolvedor Full Stack',
      'job3.b1': 'Desenvolvimento e manutenção de aplicações utilizando <strong>Angular</strong>, <strong>Laravel</strong> e <strong>MySQL</strong>;',
      'job3.b2': 'Manutenção e evolução de sistemas legados;',
      'job3.b3': 'Criação e consumo de <strong>APIs REST</strong>.',
      'job4.role': 'Desenvolvedor Web Júnior (Estágio)',
      'job4.b1': 'Desenvolvimento e manutenção de aplicações em <strong>PHP</strong>, <strong>WordPress</strong> e <strong>JavaScript</strong>;',
      'job4.b2': 'Publicação e gerenciamento de arquivos em servidores via <strong>FileZilla</strong>.',
      'contact.kicker': '// 04 · canteiro de obras',
      'contact.text': 'Tem um sistema para tirar do papel? Vamos conversar.',
      'footer': 'Construído tijolo por tijolo (HTML, CSS e JS).'
    },
    en: {
      'doc.title': 'Felipe Frade — Full Stack Developer',
      'doc.desc': 'Portfolio of Felipe Frade, a Full Stack developer who builds and architects systems and solutions.',
      'menu.label': 'Main menu',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'floor.5': 'Floor 5', 'floor.4': 'Floor 4', 'floor.3': 'Floor 3', 'floor.2': 'Floor 2', 'floor.1': 'Floor 1',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
      'hero.kicker': '// under construction',
      'hero.role': 'Full Stack Developer',
      'hero.lead': 'I <strong>build</strong> web applications — from foundation to façade — with experience in technical leadership, agile environments and international teams.',
      'hero.cta1': 'View experience',
      'hero.cta2': 'Hire me',
      'about.kicker': '// 01 · floor plan',
      'about.p1': 'Full Stack Developer experienced in building and maintaining web applications, evolving legacy systems and creating more modern front-end architectures.',
      'about.p2': 'I have worked as tech lead of a 5-person team, in agile environments and in collaboration with international teams. Based in Guaíba, Brazil.',
      'skills.kicker': '// 02 · materials and tools',
      'skills.main': 'Main stack',
      'skills.secondary': 'Secondary stacks',
      'skills.languages': 'Languages',
      'lang.pt': 'Portuguese — native',
      'lang.en': 'English — fluent',
      'exp.kicker': '// 03 · career path',
      'job1.role': 'Mid-level Front-end Developer',
      'job1.b1': 'Maintained legacy <strong>Angular</strong> applications and built a new, more modern front-end architecture aligned with the product needs;',
      'job1.b2': 'Collaborated with international teams;',
      'job1.b3': 'Used <strong>AWS</strong> services and generative AI tools.',
      'job2.role': 'Tech Lead',
      'job2.b1': 'Technical leadership of a 5-person team;',
      'job2.b2': 'Mentoring and technical support for junior developers;',
      'job2.b3': 'Managed pipelines and deployments using <strong>Docker</strong> and <strong>Jenkins</strong>;',
      'job2.b4': 'Ensured system stability across staging and production environments;',
      'job2.b5': 'Worked with the Product Manager on sprint planning, requirements refinement, demand prioritization and backlog management in <strong>Jira</strong>.',
      'job3.role': 'Full Stack Developer',
      'job3.b1': 'Developed and maintained applications using <strong>Angular</strong>, <strong>Laravel</strong> and <strong>MySQL</strong>;',
      'job3.b2': 'Maintained and evolved legacy systems;',
      'job3.b3': 'Built and consumed <strong>REST APIs</strong>.',
      'job4.role': 'Junior Web Developer (Internship)',
      'job4.b1': 'Developed and maintained applications in <strong>PHP</strong>, <strong>WordPress</strong> and <strong>JavaScript</strong>;',
      'job4.b2': 'Published and managed files on servers via <strong>FileZilla</strong>.',
      'contact.kicker': '// 04 · job site',
      'contact.text': 'Have a system you want to bring to life? Let’s talk.',
      'footer': 'Built brick by brick (HTML, CSS and JS).'
    }
  };

  const stored = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
  const browser = (navigator.language || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
  let current = dict[stored] ? stored : browser;

  function t(key) {
    return (dict[current] && dict[current][key]) || dict.pt[key] || key;
  }

  function apply() {
    document.documentElement.lang = current === 'en' ? 'en' : 'pt-BR';
    document.title = t('doc.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('doc.desc'));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('doc.title'));
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', t('doc.desc'));
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', current === 'en' ? 'en_US' : 'pt_BR');

    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('.lang button').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === current));
    });
    document.dispatchEvent(new CustomEvent('langchange'));
  }

  function setLang(lang) {
    if (!dict[lang] || lang === current) return;
    current = lang;
    try { localStorage.setItem('lang', lang); } catch (e) { /* armazenamento indisponível */ }
    apply();
  }

  document.querySelectorAll('.lang button').forEach((b) => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });

  window.I18N = { t, setLang, apply };
  apply();
})();
