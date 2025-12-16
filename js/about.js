document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation for cards
  const cards = document.querySelectorAll(".purpose-card, .value-card, .about-description");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.classList.add("fade-up");
    observer.observe(card);
  });
});
