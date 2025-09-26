const numeroCadena = '56.21';

console.log(parseInt(numeroCadena));
console.log(parseFloat(numeroCadena));
console.log(parseFloat(numeroCadena) + 3);

let numero = parseInt('t66');
if(isNaN(numero)) {
  console.log('La variable numero no ha podido convertirse bien');
} else {
  console.log(numero + 3);
}
console.log(typeof numero);
