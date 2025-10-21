// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Surprise reveal
const btn = document.getElementById("surpriseBtn");
surpriseBtn.addEventListener("click", sound);
function sound() {
  new Audio("i_m_grateful_your_mine.mp3").play();
}
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
  surprise.classList.toggle("hidden");
  startConfetti();
});

// Confetti effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function randomColor() {
  const colors = ["#ff4081", "#ffeb3b", "#00e676", "#42a5f5", "#ff5722"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createParticles() {
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8,
      h: 14,
      color: randomColor(),
      speed: Math.random() * 7 + 3 ,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.w, p.h);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  }
}

function startConfetti() {
  createParticles();
  setInterval(drawParticles, 25);
}

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 1 + 1 + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
