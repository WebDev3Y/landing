const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const particles = [];

function createParticle() {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;
    const color = `rgba(255,255,255,${Math.random().toFixed(2)})`;

    particles.push({ size, x, y, speedX, speedY, color });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;

        // Reinitialize particle when it moves out of view
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
            p.speedX = Math.random() * 2 - 1;
            p.speedY = Math.random() * 2 - 1;
        }
    });

    requestAnimationFrame(animate);
}

// Create 100 particles
for (let i = 0; i < 100; i++) {
    createParticle();
}

animate();
pa