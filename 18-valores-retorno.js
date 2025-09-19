
function sumar(sumando1, sumando2) {
  return sumando1 + sumando2;
  // console.log('algo');
}

console.log(sumar(5, 7));

function obtenerValorMaximo(valores) {
  if(valores.length > 0) {
    let valorMayor = valores[0];
    for(let i = 1; i < valores.length; i++) {
      if(valorMayor < valores[i]) {
        valorMayor = valores[i];
      }
    }
    return valorMayor;
  } else {
    console.log('No hay valores en el array');
    return 0;
  }
}

let cantidades = [23, 5, 88, 3, 93, 66];
let maximo = obtenerValorMaximo(cantidades);
console.log(maximo);

console.log(obtenerValorMaximo([]));