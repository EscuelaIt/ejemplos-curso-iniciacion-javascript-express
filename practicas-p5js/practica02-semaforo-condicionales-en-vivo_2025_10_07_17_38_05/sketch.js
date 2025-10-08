let offsetXRectangulo = 0;
let anchuraRectangulo = 0
let estado = "rojo";
let indiceEstado = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  // Inicialización
  const coloresEncendidos = ["red", "yellow", "green"];
  const coloresApagados = [color(80, 20, 20), color(80, 80, 50), color(20, 80, 20)];
  const anchuraRectangulo = 100;
  const alturaRectangulo = 250;
  const offsetYRectangulo = 75;
  const diametroLuces = 50;
  const xLuces = offsetXRectangulo + anchuraRectangulo / 2;
  
  // Rectángulo base
  fill(10, 50, 10);
  rect(offsetXRectangulo, offsetYRectangulo, anchuraRectangulo, alturaRectangulo);
  
  // Círculo rojo
  const yRojo = offsetYRectangulo + alturaRectangulo / 3 / 2;
  if(estado === 'rojo') {
    fill(coloresEncendidos[0]);
  } else {
    fill(coloresApagados[0]);    
  }
  circle(xLuces, yRojo, diametroLuces);
  
  // Círculo amarillo
  const yAmarillo = yRojo + alturaRectangulo / 3;
  if(estado === 'amarillo') {
    fill(coloresEncendidos[1]);
  } else {
    fill(coloresApagados[1]);    
  }
  circle(xLuces, yAmarillo, diametroLuces);
  
  // Círculo verde
  const yVerde = yAmarillo + alturaRectangulo / 3;
  if(estado === 'verde') {
    fill(coloresEncendidos[2]);
  } else {
    fill(coloresApagados[2]);    
  }
  circle(xLuces, yVerde, diametroLuces);
  
  // offsetXRectangulo++;
  //console.log(offsetXRectangulo)
}

function mouseClicked() {
  console.log(estado);
  /*
  if(estado === 'rojo') {
    estado = 'verde';
  } else if(estado === 'amarillo') {
    estado = 'rojo';
  } else if(estado === 'verde') {
    estado = 'amarillo';
  }
  */
  /*
  switch(estado) {
    case 'rojo':
      estado = 'verde';
      break;
    case 'amarillo':
      estado = 'rojo';
      break;
    case 'verde':
      estado = 'amarillo';
  }
  */
  let secuenciaEstados = ['rojo', 'verde', 'amarillo'];
  indiceEstado = (indiceEstado + 1) % secuenciaEstados.length;
  estado = secuenciaEstados[indiceEstado];
}

