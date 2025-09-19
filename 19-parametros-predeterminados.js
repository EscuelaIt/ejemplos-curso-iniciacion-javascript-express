// function saludar (nombre = "EscuelaIT") {
//   console.log('Hola ' + nombre);
// }

// saludar();
// saludar('Miguel');

let valores = [67, 8, -7, 32, 9, -1, 12];

function valoresSuperiores(umbral, valores = []) {
  console.log('valores: ', valores, 'umbral:', umbral);
  let superiores = [];
  for(valorActual of valores) {
    if(valorActual > umbral) {
      superiores[superiores.length] = valorActual;
    }
  }
  return superiores;
}

console.log(valoresSuperiores(10));
