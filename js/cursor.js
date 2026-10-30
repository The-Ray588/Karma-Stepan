document.addEventListener('DOMContentLoaded', () => {
  const clickSound = new Audio('assets/sounds/click.mp3');
  clickSound.volume = 0.15;

  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button, .tab, .terminal-icon')) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  });
});
