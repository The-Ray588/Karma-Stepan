document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  function switchTab(hash) {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    if (!hash || hash === '#') hash = '#about';

    const activeTab = document.querySelector(`.tab[href="${hash}"]`);
    const activeContent = document.querySelector(hash);

    if (activeTab && activeContent) {
      activeTab.classList.add('active');
      activeContent.classList.add('active');
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const hash = tab.getAttribute('href');
      history.pushState(null, '', hash);
      switchTab(hash);
    });
  });

  window.addEventListener('popstate', () => {
    switchTab(window.location.hash);
  });

  switchTab(window.location.hash);

  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const spans = langSwitch.querySelectorAll('span');
      spans.forEach(s => s.classList.remove('active-lang'));
      const active = langSwitch.querySelector('.active-lang');
      if (!active) {
        spans[0].classList.add('active-lang');
      }
    });
  }
});
