let frutas = ['Pera', 'Manzana', 'Melón', 'Sandía'];

for(let i = 0; i < frutas.length; i++) {
  console.log('La fruta actual es: ' + frutas[i]);
  if(frutas[i] == 'Melón') {
    console.log('El melón está en la posición ' + (i + 1));
    break;
  }
}