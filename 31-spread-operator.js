let persona = {
  id: 45,
  nombre: 'Miguel Angel',
  genero: 'Masculino',
  prefiereEnviosEmail: true,
}

let personaConEmail = {
  ...persona,
  id: 55,
  email: 'miguel@escuela.it',
}

console.log(personaConEmail);

let numeros = [1, 2, 3];
let masNumeros = [...numeros, 4, 5, 6];

console.log(masNumeros);

function sumar(a, b, c) {
  return a + b + c;
}
console.log(sumar(...numeros));