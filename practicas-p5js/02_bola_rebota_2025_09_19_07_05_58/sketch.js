let x = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x, 200, 50);
  x = x + speed;
  if(x > 400) {
    speed = -3;
  }
  if(x < 0) {
    speed = 3;
  }
  console.log(x)
}