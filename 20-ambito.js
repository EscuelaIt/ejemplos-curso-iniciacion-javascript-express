let global = "Soy global";

let numero = 22;

function ambito() {
  let local = "Soy local";
  console.log(local);
  console.log(global);
  global = "Ahora vales otra cosa";
  console.log(global);
  let numero = 44;
  console.log(numero);
}

ambito();
console.log(global);
// console.log(local); no puedo acceder a local
console.log(numero);

function foo(numero) {
  while(numero < 33) {
    var sumar = 3;
    let restar = 10;
    console.log(numero - restar + sumar);
    numero += 4;
  }
  // console.log(restar); no está disponible fuera del bloque
  console.log(sumar);
}
foo(numero);
// console.log(sumar); sigue siendo local a la función

