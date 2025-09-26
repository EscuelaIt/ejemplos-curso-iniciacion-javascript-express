function setup() {
  createCanvas(400, 400);
  let arrayColores = [
    color(150, 50, 50),
    color(50, 150, 50),
    color(50, 50, 150),
    color(150, 150, 50),
  ];
  noStroke();
  let posY = 200;
  fill(arrayColores[0]);
  rect(50, posY, 50, 50);
  fill(arrayColores[1]);
  rect(150, posY, 50, 50);
  fill(arrayColores[2]);
  rect(250, posY, 50, 50);
  fill(arrayColores[3]);
  rect(350, posY, 50, 50);
}

