function setup() {
  createCanvas(400, 400);
  background(255);
  let espaciado = 10;
  strokeWeight(3);
  for(let i = 0; i < height; i += espaciado ) {
    console.log(i);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    line(0, i, width, i);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    line(i, 0, i, height);
  }
}
