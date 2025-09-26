
let cadena = "EscuelaIT";
console.log(cadena.length);

for(let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}

console.log(cadena.toLowerCase());
console.log(cadena.indexOf('I'));

let correo = 'miguel@escuela.it';
let posArroba = correo.indexOf('@');
let dominio = correo.substring(correo.indexOf('.'), posArroba + 1);
console.log(dominio);


console.log(correo.slice(posArroba + 1, - 2));