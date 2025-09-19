let fruta1 = {
  nombre: "Pera",
  precio: 2,
  stock: 10,
  variedad: "Limonera",
}

for(let propiedad in fruta1) {
  console.log(`La propiedad ${propiedad} vale ${fruta1[propiedad]}`);
}

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

for(let fruta of frutas) {
  console.log(fruta.nombre.toUpperCase());
  for(let propiedad in fruta) {
    console.log(`La propiedad ${propiedad} vale ${fruta[propiedad]}`);
  }
}