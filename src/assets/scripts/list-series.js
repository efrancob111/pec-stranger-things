const favoriteseries = [
  
  "Stranger Things",
  "Juego de Tronos",
  "Dark"
];
const list = document.getElementById("favoriteseries");

favoriteseries.forEach(serie => {
  const li = document.createElement("li");
  li.textContent = serie;
  list.appendChild(li);
});