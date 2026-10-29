const favoriteSeries = [
  
  "Stranger Things",
  "Juego de Tronos",
  "Dark"
];

const list = document.getElementById("favoriteSeries");

favoriteSeries.forEach(serie => {
  const li = document.createElement("li");
  li.textContent = serie;
  list.appendChild(li);
});