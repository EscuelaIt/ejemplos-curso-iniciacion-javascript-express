let offsetXRectangulo = 0;
let estado = "rojo";
let indiceEstado = 0;
const coloresEncendidos = ["red", "yellow", "green"];
let coloresApagados;
const anchuraRectangulo = 100;
const alturaRectangulo = 250;
const offsetYRectangulo = 75;
const yRojo = offsetYRectangulo + alturaRectangulo / 3 / 2;
const diametroLuces = 50;

function setup() {
  createCanvas(400, 400);
  coloresApagados = [color(80, 20, 20), color(80, 80, 50), color(20, 80, 20)];
}

function draw() {
  background(200);
  dibujarRectanguloBase();
  dibujarLuzSemaforo('rojo', 0);
  dibujarLuzSemaforo('amarillo', 1);
  dibujarLuzSemaforo('verde', 2);
  offsetXRectangulo++;
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

function dibujarLuzSemaforo(nombreLuz, indiceColor) {
  if(estado === nombreLuz) {
    fill(coloresEncendidos[indiceColor]);
  } else {
    fill(coloresApagados[indiceColor]);    
  }
  const xLuces = offsetXRectangulo + anchuraRectangulo / 2;
  const posicionY = yRojo + alturaRectangulo * indiceColor / 3;
  circle(xLuces, posicionY, diametroLuces);
}