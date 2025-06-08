// script.js

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('active');
}

// Image slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const slidesContainer = document.querySelector('.slides');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// Initialize first slide
window.onload = () => showSlide(slideIndex);

// Scroll animation for About Us section
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about-section');
  if (!aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    aboutSection.classList.add('visible');
  }
});
// Close sidebar when clicking on internal anchor links inside sidebar
document.querySelectorAll('#sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar(); // Assuming closeSidebar() is already defined in your script.js
  });
});

