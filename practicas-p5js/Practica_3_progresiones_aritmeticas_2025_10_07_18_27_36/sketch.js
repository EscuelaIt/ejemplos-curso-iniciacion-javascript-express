function setup() {
  createCanvas(400, 400);
  background(220);
  progresionAritmetica(200, 50, 'red');
  progresionAritmetica(110, 25, 'blue');
  progresionAritmetica(0, 5, 'green');
}

function progresionAritmetica(primero, diferencia, colorProgresion) {
  fill(colorProgresion);
  let valorX = 0;
  let valorY = height - primero;
  while(valorX <= width && valorY <= height && valorX >= 0 && valorY >= 0) {
    circle(valorX, valorY, 5);
    valorX += 10;
    valorY -= diferencia;
    console.log(valorX);
  }
}