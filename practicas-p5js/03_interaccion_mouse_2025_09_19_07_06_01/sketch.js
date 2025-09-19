function setup() {
  createCanvas(400, 400);
  strokeWeight(5);
}

function draw() {
  // background(220);
  circle(mouseX, mouseY, 100);
}

function mouseMoved() {
  fill(random(100, 200), 80, 80);
}

function mousePressed() {
  stroke(random(100, 200), random(100, 200), random(100, 200))
}