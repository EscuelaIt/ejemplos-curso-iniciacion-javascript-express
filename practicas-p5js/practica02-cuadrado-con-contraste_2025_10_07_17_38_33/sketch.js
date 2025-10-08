function setup() {
  createCanvas(400, 400);
  let tamano = 100;
  let rojo = random(0, 255);
  let verde = random(0, 255);
  let azul = random(0, 255);
  if(rojo > 126 || verde > 126 || azul > 126) {
     background(0);
  } else {
     background(255);
  }
  fill(rojo, verde, azul);
  rect((width - tamano) / 2, (height - tamano) / 2, tamano, tamano);
}
