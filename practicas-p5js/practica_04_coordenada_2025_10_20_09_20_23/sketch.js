class Coordenada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  } 
  
  esIgual(c2) {
    return this.x == c2.x && this.y == c2.y; 
  }
}

function setup() {
  createCanvas(400, 400);
  let c1 = new Coordenada(2, 4);
  let c2 = new Coordenada(2, 4);
  if(c1.esIgual(c2)) {
    console.log('son iguales');
  } else {
    console.log('son diferentes');
  }
}
