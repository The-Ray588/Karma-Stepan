document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ru: {
      about: 'обо мне',
      guestbook: 'гостевая',
      github: 'github',
      setup: 'сетап',
      greeting: 'привет! Меня звать Степан, мне на данный момент 12 лет, пишу коды, ввиде ddos. Знаю языки C++ , JavaScript и Python',
      developer: 'начинающий разработчик',
      notSleeping: 'не сплю',
      sleeping: 'сплю',
      waking: 'просыпаюсь',
      guestbookPrompt: 'можешь оставить что-нибудь, появится после того как я прочитаю',
      namePlaceholder: 'имя (можно не писать)',
      messagePlaceholder: 'сообщение',
      send: 'отправить',
      views: 'просмотров',
      source: 'исходники',
      repos: 'РЕПОЗИТОРИИ',
      langs: 'ЯЗЫКИ'
    },
    en: {
      about: 'about',
      guestbook: 'guestbook',
      github: 'github',
      setup: 'setup',
      greeting: 'hi! My name is Stepan, I am currently 12 years old, I write code like ddos. I know C++, JavaScript and Python',
      developer: 'beginner developer',
      notSleeping: 'awake',
      sleeping: 'sleeping',
      waking: 'waking up',
      guestbookPrompt: 'you can leave something, it will appear after I read it',
      namePlaceholder: 'name (optional)',
      messagePlaceholder: 'message',
      send: 'send',
      views: 'views',
      source: 'source',
      repos: 'REPOS',
      langs: 'LANGS'
    }
  };

  function applyLang(lang) {
    const t = translations[lang];

    document.querySelector('.tab[href="#about"]').textContent = t.about;
    document.querySelector('.tab[href="#guestbook"]').textContent = t.guestbook;
    document.querySelector('.tab[href="#github"]').textContent = t.github;
    document.querySelector('.tab[href="#setup"]').textContent = t.setup;
    document.querySelector('#about p').textContent = t.greeting;

    const dimLines = document.querySelectorAll('#about .dim br');
    if (dimLines.length >= 2) {
      dimLines[0].previousSibling.textContent = t.developer + ' ';
      document.querySelector('#sleep-status').textContent = t.notSleeping;
    }

    document.querySelector('#guestbook > p').textContent = t.guestbookPrompt;
    document.getElementById('guest-name').placeholder = t.namePlaceholder;
    document.getElementById('guest-message').placeholder = t.messagePlaceholder;
    document.querySelector('#guest-form button').textContent = t.send;

    const footer = document.querySelectorAll('.footer span');
    footer[1].textContent = '549 ' + t.views;
    footer[2].textContent = t.source;

    const infoTables = document.querySelectorAll('.info-table');
    if (infoTables[0]) {
      infoTables[0].querySelector('tr:nth-child(1) td:first-child').textContent = t.repos;
      infoTables[0].querySelector('tr:nth-child(2) td:first-child').textContent = t.langs;
    }

    document.querySelectorAll('.lang-switch span').forEach(s => s.classList.remove('active-lang'));
    document.querySelector(`.lang-switch span:nth-child(${lang === 'ru' ? 1 : 3})`).classList.add('active-lang');
  }

  document.querySelectorAll('.lang-switch span').forEach(span => {
    span.addEventListener('click', () => {
      const lang = span.textContent.trim();
      if (lang === 'ru' || lang === 'en') {
        applyLang(lang);
      }
    });
  });
});
