function setup() {
  createCanvas(400, 400);
  let misColores = crearArrayColores(250, 200, 225);
}

function draw() {
  background(220);
}

function crearArrayColores(r, g, b) {
  const colores = [];
  let iteracion = 0;
  let rojo, verde, azul; 
  do {
    rojo = min(r + iteracion * 10, 255); 
    verde = min(g + iteracion * 10, 255); 
    azul = min(b + iteracion * 10, 255);
    colores.push(color(rojo, verde, azul));
    iteracion++;
  } while(rojo < 255 || verde < 255 || azul < 255);
  return colores;
}