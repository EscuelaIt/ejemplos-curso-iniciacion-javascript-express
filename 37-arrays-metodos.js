let ciudades = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Zaragoza",
  "Málaga",
  "Murcia",
];

ciudades.push("Tenerife");
ciudades.unshift("Córdoba", "Huelva");

let ciudadSacada = ciudades.pop();
console.log(ciudadSacada);

ciudadSacada = ciudades.shift();
console.log(ciudadSacada);

console.log(ciudades);

console.log(ciudades.indexOf("Barcelona"));
console.log(ciudades.includes("Barce"));

console.log(ciudades.join(', '));

let cadenaCiudades = ciudades.join(', ');
let ciudadesSeparadas = cadenaCiudades.split(', ');
console.log(ciudadesSeparadas, typeof ciudadesSeparadas, typeof cadenaCiudades);
