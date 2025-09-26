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
// ciudades.sort((a, b) => {
//   if(a === b) {
//     return 0;
//   }
//   if(a < b) {
//     return -1;
//   }
//   return 1;
// });


ciudades.sort((a, b) => a.localeCompare(b));
console.log(ciudades);