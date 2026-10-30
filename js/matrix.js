document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width, height, columns, drops;
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';
  const fontSize = 14;

  function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(9, 9, 11, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#a78bfa';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  init();
  setInterval(draw, 50);

  window.addEventListener('resize', init);
});
