
function doble(valor) {
  elDoble = valor * 2;
  return elDoble;
}

doble(33);

console.log('Doble: ' + elDoble);

let cantidad = 40;
while(cantidad > 20) {
  var mitad = cantidad / 2;
  console.log(`La mitad de ${cantidad} es ${mitad}`);
  if(cantidad == 30) {
    cantdad = cantidad - 8;
  }
  cantidad--;
}

function listarElementos(coleccion) {
  for (elemento  of coleccion) {
    console.log(elemento);
  }
}

let paises = ["España", "Argentina", "Colombia"];
listarElementos(paises);
console.log(elemento); // fijarse que puedo acceder a la variable "elemento", ya que no fue declarada