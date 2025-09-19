var acccion = "global";
console.log(acccion);
function foo() {
  let accion = "algo...";
  x = 22;
  console.log(x);
  let paises = ["España", "Argentina", "Colombia", "Perú"];
  for (i = 0; i < paises.length; i++) {
    console.log(paises[i]);
  }
  acccion = "otra";
  console.log(accion, acccion);
}
foo();
console.log(x);
console.log(i);
console.log(acccion);