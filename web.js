// Handle contact form submission
function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      document.querySelector("form").reset();
    } else {
      alert("⚠️ Please fill all fields before submitting.");
    }
  
    return false; // Prevent actual form submission
  }
  
  // Add hover animation effect to product cards
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".product-card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  