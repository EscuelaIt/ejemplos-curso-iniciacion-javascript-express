let ciudades = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Zaragoza",
  "Málaga",
  "Murcia",
  "Palma de Mallorca",
  "Bilbao",
  "Alicante",
  "Córdoba",
  "Valladolid",
  "Vigo",
  "Gijón",
  "Granada"
];
let ciudadesFiltradas = ciudades.filter( ciudad => ciudad[0] === "M" );
let ciudadesFiltradas2 = ciudades.filter( function(ciudad, index) {
  return index % 2 === 0;
});
console.log(ciudadesFiltradas2);