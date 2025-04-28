const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

const particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 6 + 4,
    d: Math.random() * 50,
    color: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngleIncremental: (Math.random() * 0.07) + .05,
    tiltAngle: 0
  });
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + (p.r / 2), p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 2));
    ctx.stroke();
  });

  update();
}

function update() {
  particles.forEach(p => {
    p.tiltAngle += p.tiltAngleIncremental;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.x += Math.sin(p.d);
    p.tilt = Math.sin(p.tiltAngle) * 15;
    
    if (p.y > H) {
      p.y = -10;
      p.x = Math.random() * W;
    }
  });
}

setInterval(draw, 20);

window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});
