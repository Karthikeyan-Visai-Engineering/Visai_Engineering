// Reveal service cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.2,
  });

  cards.forEach(card => {
    observer.observe(card);
  });

  // ===============================
  // Horizontal Swipe Arrows
  // ===============================
  const scrollContainer = document.querySelector('.services-scroll');

  const scrollAmount = 270; // Adjust to card width + gap

  window.scrollLeftCards = function() {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  window.scrollRightCards = function() {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
});
