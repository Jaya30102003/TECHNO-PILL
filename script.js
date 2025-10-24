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


const form = document.getElementById("contactForm");
const responseText = document.getElementById("formResponse");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = new URLSearchParams(formData);

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbx1Pb7-OdE77qRhVUJda2f8C7C4qST0bw-t97n_TxYZ5FlY_xC62w7w51RSkkX445PvwA/exec", { // Replace with your Web App URL
      method: "POST",
      body: data
    });

    const result = await res.json();

    if (result.result === "success") {
      responseText.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      responseText.textContent = "Oops! Something went wrong. Try again.";
      console.error(result.error);
    }
  } catch (err) {
    responseText.textContent = "Error connecting to server.";
    console.error(err);
  }
});
