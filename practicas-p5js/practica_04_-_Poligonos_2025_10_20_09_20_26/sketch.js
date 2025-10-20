class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  } 
  
  esIgual(c2) {
    return this.x == c2.x && this.y == c2.y; 
  }
}

class Polygon {
  constructor() {
    this.coordinates = [];
  }
  
  createPoint(x, y) {
    this.coordinates.push( new Coordinate(x, y) );
  }
  
  draw() {
    if(this.coordinates.length >= 3) {
      beginShape();
      for(let index in this.coordinates) {
        vertex(this.coordinates[index].x, this.coordinates[index].y);
      }
      endShape(CLOSE);
    }
  }
  
  moveRight() {
    for(let index in this.coordinates) {
        this.coordinates[index].x ++;
      }
  }
  
  moveDown() {
    for(let index in this.coordinates) {
        this.coordinates[index].y ++;
      }
  }
}

let poly, poly2;

function setup() {
  createCanvas(400, 400);
  poly = new Polygon();
  poly.createPoint(1,2);
  poly.createPoint(100,29);
  poly.createPoint(51,66); 
  
  poly2 = new Polygon();
  poly2.createPoint(10,2);
  poly2.createPoint(300,29);
  poly2.createPoint(151,11); 
  poly2.createPoint(251,166); 
  poly2.createPoint(351,266); 
}

function draw() {
  background(250);
  poly.draw();
  poly.moveRight();
  poly2.draw();
  poly2.moveDown();
}
