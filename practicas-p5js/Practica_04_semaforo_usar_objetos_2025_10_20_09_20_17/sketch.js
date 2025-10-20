let semaforo = {
  offsetXRectangulo: 0,
  estado: 'rojo',
  indiceEstado: 0,
  anchuraRectangulo: 100,
  alturaRectangulo: 250,
  offsetYRectangulo: 75,
  diametroLuces: 50,
  
  calcularYRojo: function() {
    return this.offsetYRectangulo + this.alturaRectangulo / 3 / 2;
  }
}

let coloresSemaforo;

function setup() {
  createCanvas(400, 400);
  coloresSemaforo = {
    encendidos: ["red", "yellow", "green"],
    apagados: [color(80, 20, 20), color(80, 80, 50), color(20, 80, 20)]
  };
}

function draw() {
  background(200);
  dibujarRectanguloBase();
  dibujarLuzSemaforo('rojo', 0);
  dibujarLuzSemaforo('amarillo', 1);
  dibujarLuzSemaforo('verde', 2);
  // semaforo.offsetXRectangulo++;
}

function mouseClicked() {
  console.log(semaforo.estado);
  let secuenciaEstados = ['rojo', 'verde', 'amarillo'];
  semaforo.indiceEstado = (semaforo.indiceEstado + 1) % secuenciaEstados.length;
  semaforo.estado = secuenciaEstados[semaforo.indiceEstado];
}

function dibujarRectanguloBase() {
  fill(10, 50, 10);
  rect(
    semaforo.offsetXRectangulo, 
    semaforo.offsetYRectangulo, 
    semaforo.anchuraRectangulo, 
    semaforo.alturaRectangulo
  );
}

function dibujarLuzSemaforo(nombreLuz, indiceColor) {
  if(semaforo.estado === nombreLuz) {
    fill(coloresSemaforo.encendidos[indiceColor]);
  } else {
    fill(coloresSemaforo.apagados[indiceColor]);    
  }
  const xLuces = semaforo.offsetXRectangulo + semaforo.anchuraRectangulo / 2;
  const posicionY = semaforo.calcularYRojo() + semaforo.alturaRectangulo * indiceColor / 3;
  console.log(posicionY)
  circle(xLuces, posicionY, semaforo.diametroLuces);
}