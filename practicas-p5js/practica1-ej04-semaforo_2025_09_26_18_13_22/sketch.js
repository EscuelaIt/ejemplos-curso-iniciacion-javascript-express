let offsetXRectangulo = 0;
let anchuraRectangulo = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  const coloresSemaforo = ["red", "yellow", "green"];
  const anchuraRectangulo = 100;
  const alturaRectangulo = 250;
  const offsetYRectangulo = 75;
  const diametroLuces = 50;
  const xLuces = offsetXRectangulo + anchuraRectangulo / 2;
  
  fill(10, 50, 10);
  rect(offsetXRectangulo, offsetYRectangulo, anchuraRectangulo, alturaRectangulo);
  
  const yRojo = offsetYRectangulo + alturaRectangulo / 3 / 2;
  fill(coloresSemaforo[0]);
  circle(xLuces, yRojo, diametroLuces);
  
  const yAmarillo = yRojo + alturaRectangulo / 3;
  fill(coloresSemaforo[1]);
  circle(xLuces, yAmarillo, diametroLuces);
  
  const yVerde = yAmarillo + alturaRectangulo / 3;
  fill(coloresSemaforo[2]);
  circle(xLuces, yVerde, diametroLuces);
  
  offsetXRectangulo++;
  console.log(offsetXRectangulo)
}

