let frutas = ['Pera', 'Manzana', 'Melón', 'Sandía', 'Naranja', 'Melón', 'Uva', 'Kiwi'];

for(let i = 0; i < frutas.length; i++) {
  if(frutas[i] != 'Melón') {
    continue;
  }
  console.log('La fruta actual es: ' + frutas[i]);
}