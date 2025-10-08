const offsetXRectangulo = 100;
let estado = "rojo";
let indiceEstado = 0;
const coloresEncendidos = ["red", "yellow", "green"];
let coloresApagados;
const anchuraRectangulo = 100;
const alturaRectangulo = 250;
const offsetYRectangulo = 75;
const diametroLuces = 50;
const xLuces = offsetXRectangulo + anchuraRectangulo / 2;
const yRojo = offsetYRectangulo + alturaRectangulo / 3 / 2;

function setup() {
  createCanvas(400, 400);
  coloresApagados = [color(80, 20, 20), color(80, 80, 50), color(20, 80, 20)];
}

function draw() {
  background(200);
  dibujarRectanguloBase();
  dibujarCirculoRojo();
  dibujarCirculoAmarillo();
  dibujarCirculoVerde();
}

function mouseClicked() {
  console.log(estado);
  let secuenciaEstados = ['rojo', 'verde', 'amarillo'];
  indiceEstado = (indiceEstado + 1) % secuenciaEstados.length;
  estado = secuenciaEstados[indiceEstado];
}

function dibujarRectanguloBase() {
  fill(10, 50, 10);
  rect(offsetXRectangulo, offsetYRectangulo, anchuraRectangulo, alturaRectangulo);
}
function dibujarCirculoRojo() {
  if(estado === 'rojo') {
    fill(coloresEncendidos[0]);
  } else {
    fill(coloresApagados[0]);    
  }
  circle(xLuces, yRojo, diametroLuces);
}
function dibujarCirculoAmarillo() {
  const yAmarillo = yRojo + alturaRectangulo / 3;
  if(estado === 'amarillo') {
    fill(coloresEncendidos[1]);
  } else {
    fill(coloresApagados[1]);    
  }
  circle(xLuces, yAmarillo, diametroLuces);
}
function dibujarCirculoVerde() {
  const yVerde = yRojo + alturaRectangulo * 2 / 3;
  if(estado === 'verde') {
    fill(coloresEncendidos[2]);
  } else {
    fill(coloresApagados[2]);    
  }
  circle(xLuces, yVerde, diametroLuces);
}