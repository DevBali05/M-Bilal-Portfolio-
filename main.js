// Simple contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    this.reset();
  });
});
