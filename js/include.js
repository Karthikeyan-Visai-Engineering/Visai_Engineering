document.addEventListener("DOMContentLoaded", () => {
  const headerSection = document.getElementById("header");
  const heroSection = document.getElementById("hero-section");
  const homeSection = document.getElementById("home");
  const servicesSection = document.getElementById("services");
  const projectSection = document.getElementById("project");
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");
  const footerSection = document.getElementById("footer");

  // Load Header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      headerSection.innerHTML = data;

      // 🌟 Header scroll hide logic
      const header = document.querySelector(".site-header");
      let lastScrollTop = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 50) {
          header.classList.add("hidden"); // slide up
        } else {
          header.classList.remove("hidden"); // slide down
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });

      // Load Hero after header
      return fetch("hero.html");
    })
    .then(res => res.text())
    .then(data => {
      heroSection.innerHTML = data;
      if (typeof initHeroSlider === "function") initHeroSlider();
      return fetch("home.html");
    })
    .then(res => res.text())
    .then(data => {
      homeSection.innerHTML = data;
      return fetch("services.html");
    })
    .then(res => res.text())
    .then(data => {
      servicesSection.innerHTML = data;
      return fetch("project.html");
    })
    .then(res => res.text())
    .then(data => {
      projectSection.innerHTML = data;
      return fetch("about.html");
    })
    .then(res => res.text())
    .then(data => {
      aboutSection.innerHTML = data;
      return fetch("contact.html");
    })
    .then(res => res.text())
    .then(data => {
      contactSection.innerHTML = data;
      return fetch("footer.html");
    })
    .then(res => res.text())
    .then(data => {
      footerSection.innerHTML = data;
    })
    .catch(err => console.error("Error loading HTML:", err));
});
