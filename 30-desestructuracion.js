function dameFruta() {
  return {
    nombre: "Platano",
    precio: 2.55,
    stock: 12,
    variedad: "Platano de Canarias",
  }
}

let {nombre, precio} = dameFruta();
console.log(nombre, precio);

let fruta = {
    nombre: "Manzana",
    precio: 1.67,
    stock: 6,
    variedad: "Golden",
}

function mostrarPrecio({nombre, precio}) {
  console.log(`El precio de ${nombre} es: ${precio} euros el kilo`);
}
mostrarPrecio(fruta);