let cantidadCuadrados = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(5); 
}

function draw() {
  cantidadCuadrados++;
  let colores = ["white", "orange", "black", 'red'];
  let tamano = width / cantidadCuadrados;
  let color = 'white';
  for(let i = 0; i < cantidadCuadrados; i++) {
    for(let j = 0; j < cantidadCuadrados; j++) {
      fill(colores[(i + j) % colores.length]);
      rect(i * tamano, j * tamano, tamano, tamano);
    }
  }
}
