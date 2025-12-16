document.addEventListener("DOMContentLoaded", () => {
  const sections = ["home", "about","header","hero"];

  sections.forEach(id => {
    fetch(`sections/${id}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${id}:`, err));
  });
});
