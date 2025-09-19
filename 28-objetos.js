
// let fruta1Nombre = "pera";
// let fruta1Precio = "2";
// let fruta1Stock = "10";

let fruta1 = {
  nombre: "Pera",
  precio: 2,
  stock: 10,
  variedad: "Limonera",
}

fruta1.variedad = "De temporada";
console.log(fruta1.nombre);
console.log(fruta1);

let frutas = [
  {
    nombre: "Pera",
    precio: 2,
    stock: 10,
    variedad: "Limonera",
  },
  {
    nombre: "Manzana",
    precio: 1.67,
    stock: 6,
    variedad: "Golden",
  },
  {
    nombre: "Platano",
    precio: 2.55,
    stock: 12,
    variedad: "Platano de Canarias",
  },
];

frutas.forEach( fruta => console.log(`Tenemos ${fruta.nombre} de la variedad ${fruta.variedad}`) );

// JSON

let circulo = {
  posicionX: 100, 
  posicionY: 80,
  diametro: 50
}

let circuloComplejo = {
  coordenada: {
      x: 100, 
      y: 80,
  },
  diametro: 50,
  datos: [45, 65, 23],
}

console.log(circuloComplejo.coordenada.x);