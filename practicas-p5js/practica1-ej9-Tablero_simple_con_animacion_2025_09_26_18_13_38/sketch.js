function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  console.log(frameCount);
  let arrayColores = [
    color(150, 50, 50),
    color(50, 150, 50),
    color(50, 50, 150),
    color(150, 150, 50),
    color(150, 150, 150),
    color(250, 250, 50),
    color(250, 150, 50),
    color(250, 250, 150),
    color(150, 250, 250),
  ];
  noStroke();
  let dimension = 100;
  let posY = 200;
  fill(arrayColores[(frameCount - 1) % arrayColores.length]);
  rect(300, posY, dimension, dimension);
  fill(arrayColores[(frameCount) % arrayColores.length]);
  rect(200, posY, dimension, dimension);
  fill(arrayColores[(frameCount + 1) % arrayColores.length]);
  rect(100, posY, dimension, dimension);
  fill(arrayColores[(frameCount + 2) % arrayColores.length]);
  rect(0, posY, dimension, dimension);
}

