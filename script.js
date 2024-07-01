function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Use FormData to capture form data
  const formData = new FormData(event.target);
  
  // Send form data via fetch API
  fetch(event.target.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      // Show the confirmation message on success
      document.getElementById('confirmation-message').textContent = 'Thank you for reaching out! I will get back to you soon.';
      document.getElementById('confirmation-message').classList.add('show');
      // Clear the form fields
      event.target.reset();
    } else {
      // Show error message on failure
      document.getElementById('confirmation-message').textContent = 'Oops! Something went wrong. Please try again.';
      document.getElementById('confirmation-message').classList.add('show');
    }
  })
  .catch(() => {
    // Show error message on fetch failure
    document.getElementById('confirmation-message').textContent = 'Oops! Something went wrong. Please try again.';
    document.getElementById('confirmation-message').classList.add('show');
  });
});
