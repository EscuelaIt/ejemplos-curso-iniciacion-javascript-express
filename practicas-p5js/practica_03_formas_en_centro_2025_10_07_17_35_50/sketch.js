function setup() {
  createCanvas(400, 400);
  background(220);
  dibujarCirculo(100, 100, 100);
  dibujarCuadrado(300, 300, 100);
}

function dibujarCirculo(centroX, centroY, distancia) {
  circle(centroX, centroY, distancia * 2);
}

function dibujarCuadrado(centroX, centroY, distancia) {
  rect(centroX - distancia, centroY - distancia, distancia * 2, distancia * 2);
}


