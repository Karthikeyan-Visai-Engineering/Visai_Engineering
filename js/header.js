function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScroll) {
      // Scroll down → hide header
      header.classList.add("hidden");
    } else {
      // Scroll up → show header
      header.classList.remove("hidden");
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });
}
