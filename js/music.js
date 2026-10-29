document.addEventListener('DOMContentLoaded', () => {
  const tracks = [
    'Sace, DJ Pointless — cold air',
    'Sace — neon drive',
    'DJ Pointless — dark matter',
    'Sace — midnight code',
    'DJ Pointless — terminal',
    'Sace — arch btw',
    'DJ Pointless — buffer overflow'
  ];

  const nowPlayingEl = document.getElementById('now-playing');
  if (nowPlayingEl) {
    nowPlayingEl.textContent = tracks[Math.floor(Math.random() * tracks.length)];
  }
});
