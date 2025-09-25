class Coordenada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class Circulo {
  constructor(x, y, diametro) {
    this.coordenada = new Coordenada(x, y);
    this.radio = diametro / 2;
  } 

  calcularRadio() {
    return this.radio;
  }

  mostrarPropiedades() {
    console.log(`Soy un círculo en la posición ${this.coordenada.toString()}`);
    console.log(`Y además mi radio es ${this.calcularRadio()}`);
  }

  cambiarDiametro(diametro) {
    this.radio = diametro / 2;
  }
}

let c1 = new Circulo(100, 100, 50);
let c2 = new Circulo(1, 10, 22);

c1.mostrarPropiedades();
c2.mostrarPropiedades();

c1.x = 1000;
c1.y = 0;
c1.cambiarDiametro(330);
c1.mostrarPropiedades();

