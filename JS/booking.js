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

// 🟩 Modal Booking Form Submit (Redirect with Params)
document.addEventListener('DOMContentLoaded', () => {
  const modalForm = document.getElementById('modalBookingForm'); // Modal form ID

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const checkin = modalForm.elements['checkin'].value;
      const checkout = modalForm.elements['checkout'].value;
      const adults = modalForm.elements['adults'].value;
      const children = modalForm.elements['children'].value;

      if (!checkin || !checkout || !adults) {
        alert("Please fill in all required fields.");
        return;
      }

      if (new Date(checkin) > new Date(checkout)) {
        alert("Check-out date must be after check-in date.");
        return;
      }

      const query = new URLSearchParams({
        checkin,
        checkout,
        adults,
        children
      }).toString();

      window.location.href = `Booking.html?${query}`;
    });
  }
});

// 🟩 Booking Page: Pre-fill form from URL + WhatsApp submission
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  const nameInput = document.getElementById('name');
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  const roomtypeInput = document.getElementById('roomtype');
  const adultsInput = document.getElementById('adults');
  const childrenInput = document.getElementById('children');
  const messageInput = document.getElementById('message');

  if (checkinInput) checkinInput.value = urlParams.get('checkin') || '';
  if (checkoutInput) checkoutInput.value = urlParams.get('checkout') || '';
  if (adultsInput) adultsInput.value = urlParams.get('adults') || '';
  if (childrenInput) childrenInput.value = urlParams.get('children') || '';
  if (nameInput) nameInput.value = urlParams.get('name') || '';
  if (roomtypeInput) roomtypeInput.value = urlParams.get('roomtype') || '';

  const bookingForm = document.getElementById('bookingForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput.value;
      const guests = adultsInput.value;
      const checkin = checkinInput.value;
      const checkout = checkoutInput.value;
      const room = roomtypeInput.value;
      const children = childrenInput.value;
      const message = messageInput.value;

      const whatsappNumber = "918101616286";
      const whatsappMessage = `Hi! I would like to book a stay at Mahim Homestay:
Name: ${name}
Adults: ${guests}
Children: ${children}
Room: ${room}
Check-in: ${checkin}
Check-out: ${checkout}
Message: ${message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(url, "_blank");
    });
  }
});

// Close sidebar when clicking on internal anchor links inside sidebar
document.querySelectorAll('#sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar(); // Assuming closeSidebar() is already defined in your script.js
  });
});
