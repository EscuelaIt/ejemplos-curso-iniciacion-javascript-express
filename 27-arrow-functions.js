setTimeout(() => console.log('Han pasado dos segundos'), 2000);

let frutas = ['Pera', 'Manzana', 'Melón', 'Sandía'];

// frutas.forEach(function(elemento) {
//   console.log(elemento);
// });

frutas.forEach( (elemento, indice) => {
  if(elemento != "Melón") {
    console.log(elemento);
  } else {
    console.log(`En la posición ${indice + 1} hay un melón`)
  }
});
