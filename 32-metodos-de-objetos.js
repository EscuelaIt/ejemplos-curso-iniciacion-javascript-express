let circuloComplejo = {
  coordenada: {
      x: 100, 
      y: 80,
  },
  diametro: 50,
  datos: [45, 65, 23],
  calcularRadio: function() {
    return this.diametro / 2;
  },

  mostrarPropiedades: function() {
    console.log(`Soy un círculo en la posición ${this.coordenada.x},${this.coordenada.y}`);
    console.log(`Y además mi radio es ${this.calcularRadio()}`);
  }
  
}

// console.log(circuloComplejo.calcularRadio());
circuloComplejo.mostrarPropiedades();
