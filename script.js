// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Simple scroll reveal effect
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Portfolio slider
const track = document.querySelector('.portfolio-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const items = Array.from(document.querySelectorAll('.portfolio-item'));
const visibleItems = 2;
let currentIndex = 0;
const gap = 32;

function updateTrack() {
  if (items.length > 0) {
    const cardWidth = items[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

nextBtn?.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > items.length - visibleItems) currentIndex = 0;
  updateTrack();
});

prevBtn?.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - visibleItems;
  updateTrack();
});

window.addEventListener('resize', updateTrack);
updateTrack();

// Scroll header
window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseEl = document.getElementById("formResponse");
  const scriptURL = "https://script.google.com/macros/s/AKfycbzjPmpIjZx2D7nW94RO1KCWncz2O-LE394jyVKMpyVUHUZ9BCylLJeev5AykjjMy8LZNg/exec"; // replace with your URL

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent page reload
    responseEl.textContent = "Sending...";

    const formData = new URLSearchParams({
      name: form.name.value,
      email: form.email.value,
      phonenumber: form.phonenumber.value,
      message: form.message.value
    });

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.status === "success") {
        responseEl.style.color = "green";
        responseEl.textContent = "Message sent successfully!";
        form.reset();
      } else {
        responseEl.style.color = "red";
        responseEl.textContent = "Something went wrong! Try again.";
      }

    } catch (err) {
      responseEl.style.color = "red";
      responseEl.textContent = "Error sending message!";
      console.error(err);
    }
  });
});
