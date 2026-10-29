const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
let animationId;

function initCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  
  stars = [];
  const count = Math.floor((width * height) / 10000);
  
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.2,
      opacity: Math.random(),
      speed: (Math.random() * 0.015) + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);
  
  stars.forEach(star => {
    star.opacity += star.speed * star.direction;
    
    if (star.opacity > 1) {
      star.opacity = 1;
      star.direction = -1;
    } else if (star.opacity < 0.1) {
      star.opacity = 0.1;
      star.direction = 1;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });

  animationId = requestAnimationFrame(drawStars);
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    cancelAnimationFrame(animationId);
    initCanvas();
    drawStars();
  }, 200);
});

initCanvas();
drawStars();
