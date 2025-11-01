// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Simple scroll reveal effect (optional enhancement)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});


const track = document.querySelector('.portfolio-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const items = Array.from(document.querySelectorAll('.portfolio-item'));
const visibleItems = 2;
let currentIndex = 0;

const gap = 32; // must match CSS gap

function updateTrack() {
  const cardWidth = items[0].getBoundingClientRect().width + gap;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > items.length - visibleItems) currentIndex = 0; // loop
  updateTrack();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - visibleItems; // loop
  updateTrack();
});

window.addEventListener('resize', updateTrack);
updateTrack();

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });