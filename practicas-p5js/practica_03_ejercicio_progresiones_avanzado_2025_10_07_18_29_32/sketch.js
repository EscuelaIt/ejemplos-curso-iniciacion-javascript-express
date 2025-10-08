function setup() {
  createCanvas(400, 400);
  background(60);
  noStroke();
  progresionAritmetica(100, 1, crearArrayColores(100, 100, 200), "circulo");
  progresionAritmetica(50, 2, crearArrayColores(0, 170, 200), "circulo");
  progresionAritmetica(300, -5, crearArrayColores(100, 0, 0), "circulo");
  progresionAritmetica(300, -15, crearArrayColores(0, 180, 0), "cuadrado");
  progresionAritmetica(0, 25, crearArrayColores(70, 120, 0), "cuadrado");
  
}

function progresionAritmetica(primero, diferencia, arrayColores, forma) {
  let indiceColor = 0;
  
  let valorX = 0;
  let valorY = height - primero;
  while(valorX <= width && valorY <= height && valorX >= 0 && valorY >= 0) {
    fill(arrayColores[indiceColor]);
    indiceColor ++;
    indiceColor = indiceColor < arrayColores.length ? indiceColor : arrayColores.length -1;
    if(forma == 'circulo') {
      dibujarCirculo(valorX, valorY, 3);
    } else {
      dibujarCuadrado(valorX, valorY, 3);
    }
    valorX += 8;
    valorY -= diferencia;
    console.log(valorX);
  }
}

function crearArrayColores(r, g, b) {
  const colores = [];
  let iteracion = 0;
  let rojo, verde, azul; 
  do {
    rojo = min(r + iteracion * 5, 255); 
    verde = min(g + iteracion * 5, 255); 
    azul = min(b + iteracion * 5, 255);
    colores.push(color(rojo, verde, azul));
    iteracion++;
  } while(rojo < 255 || verde < 255 || azul < 255);
  return colores;
}


const dibujarCirculo = function(centroX, centroY, distancia) {
  circle(centroX, centroY, distancia * 2);
}

const dibujarCuadrado = function(centroX, centroY, distancia) {
  rect(centroX - distancia, centroY - distancia, distancia * 2, distancia * 2);
}