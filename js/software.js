// Simple hover click animation or alert
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(card.innerText + " clicked!");
  });
});