// EDITE A DATA DA FESTA AQUI: ano, mês-1, dia, hora, minuto
// Exemplo: new Date(2026, 11, 12, 20, 0) = 12/12/2026 às 20:00
const eventDate = new Date(2026, 11, 12, 20, 0);

function updateCountdown() {
  const diff = eventDate - new Date();
  if (diff <= 0) return;
  document.getElementById("days").textContent = Math.floor(diff / 86400000);
  document.getElementById("hours").textContent = Math.floor(diff / 3600000) % 24;
  document.getElementById("minutes").textContent = Math.floor(diff / 60000) % 60;
  document.getElementById("seconds").textContent = Math.floor(diff / 1000) % 60;
}
updateCountdown();
setInterval(updateCountdown, 1000);
