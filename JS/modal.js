// modal.js

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  const openBtn = document.getElementById('openBookingBtn');
  const closeBtn = document.getElementById('closeModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Function called on modal form submit
function submitModalForm(e) {
  e.preventDefault();

  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;

  if (!checkin || !checkout || !adults) {
    alert('Please fill in all required fields.');
    return false;
  }

  const query = new URLSearchParams({
    checkin,
    checkout,
    adults,
    children
  }).toString();

  // Redirect to booking page with query parameters
  window.location.href = `Booking.html?${query}`;
  return false; // prevent form's default action
}
