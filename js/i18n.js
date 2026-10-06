(() => {
  'use strict';

  const dict = {
    pt: {
      'doc.title': 'Felipe Frade — Desenvolvedor de Software',
      'doc.desc': 'Portfólio de Felipe Frade, desenvolvedor de software com experiência em diferentes sistemas, linguagens e tecnologias.',
      'menu.label': 'Menu principal',
      'menu.open': 'Abrir menu',
      'menu.close': 'Fechar menu',
      'floor.6': '6º andar', 'floor.5': '5º andar', 'floor.4': '4º andar', 'floor.3': '3º andar', 'floor.2': '2º andar', 'floor.1': '1º andar',
      'nav.home': 'Início', 'nav.about': 'Sobre', 'nav.skills': 'Habilidades', 'nav.experience': 'Experiência', 'nav.faq': 'FAQ', 'nav.contact': 'Contato',
      'hero.kicker': '// obra em andamento',
      'hero.role': 'Desenvolvedor de Software',
      'hero.cta1': 'Projetos?',
      'hero.cta2': 'Vamos conversar',
      'about.kicker': '// 01 · planta baixa',
      'about.p1': 'Sou desenvolvedor de software com experiência em diferentes contextos e etapas do desenvolvimento: <strong>criação e manutenção de sistemas</strong>, modernização de aplicações legadas, arquitetura, integrações e <strong>desenvolvimento web</strong>. Adapto minha abordagem às necessidades de cada projeto.',
      'about.p2': 'Minha trajetória inclui desenvolvimento full stack, atuação em front-end e <strong>liderança técnica</strong> de uma equipe de 5 pessoas, em ambientes ágeis e colaboração <strong>internacional</strong>. Sigo aprendendo e busco novos desafios para ampliar minha experiência e contribuir com soluções.',
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
      'faq.kicker': '// 04 · perguntas frequentes',
      'faq.careerQuestion': 'Qual é sua situação atual de carreira?',
      'faq.careerAnswer': 'Estou em busca de um novo desafio <strong>full-time</strong>, mas também estou aberto a ideias de projetos <strong>freelancers</strong>. Estou refinando minhas habilidades em inglês para, quem sabe, levar minha carreira ao mercado <strong>internacional</strong>.',
      'faq.q1': 'Por que você não mostra projetos no portfólio?',
      'faq.a1': 'A maior parte da minha carreira foi dedicada a <strong>projetos privados</strong> para empresas. Em muitos casos, os direitos sobre as ferramentas foram cedidos, então não posso compartilhar esses trabalhos publicamente. Outros projetos foram modificados por outros profissionais ou se tornaram <strong>obsoletos</strong>. Estou criando projetos novos e atuais para apresentar por aqui.',
      'faq.q2': 'Você é Front End ou Full Stack?',
      'faq.a2': 'Nos últimos anos, tenho me dedicado mais ao <a href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end" target="_blank" rel="noopener noreferrer">Front End</a>, mas tenho plena capacidade para atuar como <a href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end" target="_blank" rel="noopener noreferrer">Full Stack</a>. Já fui líder técnico, trabalhei brevemente com automações em Python e também dei apoio pontual em testes e QA quando foi necessário.',
      'faq.q3': 'Qual é sua opinião sobre o uso de inteligência artificial?',
      'faq.a3': 'Acredito no uso de IA como qualquer desenvolvedor responsável hoje: como mais uma <strong>ferramenta</strong>, usada por quem tem conhecimento técnico para orientar e avaliar seus resultados — não como uma <strong>“lâmpada mágica”</strong>. Meus anos de experiência na área me ajudam a usá-la com <strong>critério</strong> e a extrair o máximo do seu <strong>potencial</strong>.',
      'sound.enable': 'Ativar som',
      'sound.disable': 'Desativar som',
      'faq.soundUnsupported': 'Áudio indisponível neste navegador.',
      'sound.error': 'Não foi possível reproduzir os efeitos sonoros.',
      'contact.kicker': '// 05 · canteiro de obras',
      'contact.text': 'Tem um sistema para tirar do papel? Vamos conversar.',
      'footer': 'Construído tijolo por tijolo (HTML, CSS e JS).'
    },
    en: {
      'doc.title': 'Felipe Frade — Software Developer',
      'doc.desc': 'Portfolio of Felipe Frade, a software developer experienced with different systems, programming languages and technologies.',
      'menu.label': 'Main menu',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'floor.6': 'Floor 6', 'floor.5': 'Floor 5', 'floor.4': 'Floor 4', 'floor.3': 'Floor 3', 'floor.2': 'Floor 2', 'floor.1': 'Floor 1',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
      'hero.kicker': '// under construction',
      'hero.role': 'Software Developer',
      'hero.cta1': 'Projects?',
      'hero.cta2': 'Let’s talk',
      'about.kicker': '// 01 · floor plan',
      'about.p1': 'I am a software developer with experience across different contexts and stages of development: <strong>building and maintaining systems</strong>, modernizing legacy applications, architecture, integrations and <strong>web development</strong>. I adapt my approach to each project’s needs.',
      'about.p2': 'My background includes full-stack development, front-end work and <strong>technical leadership</strong> of a 5-person team, in agile environments and collaboration with <strong>international</strong> teams. I keep learning and seek new challenges where I can broaden my experience and contribute through practical solutions.',
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
      'faq.kicker': '// 04 · frequently asked questions',
      'faq.careerQuestion': 'What is your current career situation?',
      'faq.careerAnswer': 'I am looking for a new <strong>full-time</strong> challenge, and I am also open to <strong>freelance</strong> project ideas. I am improving my English skills with the hope of taking my career <strong>international</strong>.',
      'faq.q1': 'Why do you not show projects in your portfolio?',
      'faq.a1': 'Most of my career has focused on <strong>private projects</strong> for companies. In many cases, the rights to the tools were transferred, so I cannot share that work publicly. Other projects have since been changed by other professionals or become <strong>outdated</strong>. I am building new, up-to-date projects to showcase here.',
      'faq.q2': 'Are you Front End or Full Stack?',
      'faq.a2': 'In recent years, I have focused more on <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank" rel="noopener noreferrer">Front End</a>, but I am fully capable of working as a <a href="https://en.wikipedia.org/wiki/Full-stack_developer" target="_blank" rel="noopener noreferrer">Full Stack</a> developer. I have also been a tech lead, briefly worked on Python automation, and provided occasional testing and QA support when needed.',
      'faq.q3': 'What is your view on using artificial intelligence?',
      'faq.a3': 'Like any responsible developer today, I believe AI should be used as a <strong>tool</strong> by people with technical knowledge, not as a <strong>\u201cmagic lamp\u201d</strong>. My years of experience help me use AI with <strong>good judgment</strong> and make the most of its <strong>potential</strong>.',
      'sound.enable': 'Enable sound',
      'sound.disable': 'Disable sound',
      'faq.soundUnsupported': 'Audio is unavailable in this browser.',
      'sound.error': 'Sound effects could not be played.',
      'contact.kicker': '// 05 · job site',
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
