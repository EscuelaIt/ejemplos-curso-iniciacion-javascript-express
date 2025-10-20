class Semaforo {
  constructor() {
    this.offsetXRectangulo = 0;
    this.estado = 'rojo';
    this.indiceEstado = 0;
    this.anchuraRectangulo = 100;
    this.alturaRectangulo = 250;
    this.offsetYRectangulo = 75;
    this.diametroLuces = 50;
    this.coloresSemaforo = {
      encendidos: ["red", "yellow", "green"],
      apagados: [color(80, 20, 20), color(80, 80, 50), color(20, 80, 20)]
    };
  }
  
  calcularYRojo() {
    return this.offsetYRectangulo + this.alturaRectangulo / 3 / 2;
  }
  
  dibujar() {
    this.dibujarRectanguloBase();
    this.dibujarLuzSemaforo('rojo', 0);
    this.dibujarLuzSemaforo('amarillo', 1);
    this.dibujarLuzSemaforo('verde', 2);
  }
  
  dibujarRectanguloBase() {
    fill(10, 50, 10);
    rect(
      this.offsetXRectangulo, 
      this.offsetYRectangulo, 
      this.anchuraRectangulo, 
      this.alturaRectangulo
    );
  }
  
  dibujarLuzSemaforo(nombreLuz, indiceColor) {
    if(this.estado === nombreLuz) {
      fill(this.coloresSemaforo.encendidos[indiceColor]);
    } else {
      fill(this.coloresSemaforo.apagados[indiceColor]);    
    }
    const xLuces = this.offsetXRectangulo + this.anchuraRectangulo / 2;
    const posicionY = this.calcularYRojo() + this.alturaRectangulo * indiceColor / 3;
    circle(xLuces, posicionY, this.diametroLuces);
  }
  
  cambiarEstado() {
    console.log(this.estado);
    let secuenciaEstados = ['rojo', 'verde', 'amarillo'];
    this.indiceEstado = (this.indiceEstado + 1) % secuenciaEstados.length;
    this.estado = secuenciaEstados[this.indiceEstado];
  }
}

let semaforo;
let semaforo2;

function setup() {
  createCanvas(400, 400);
  semaforo = new Semaforo();
  semaforo2 = new Semaforo();
  semaforo2.offsetXRectangulo = 150;
  semaforo2.offsetYRectangulo = 10;
}

function draw() {
  background(200);
  semaforo.dibujar();
  semaforo2.dibujar();
}

function mouseClicked() {
  semaforo.cambiarEstado();
}
  
function doubleClicked() {
  semaforo2.cambiarEstado();
}


