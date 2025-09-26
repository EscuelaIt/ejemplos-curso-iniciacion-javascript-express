function setup() {
  const canvasWidth = 400;
  createCanvas(canvasWidth, 400);
  background(220);
  
  let name = 'Pepe';
  
  textSize(36);
  fill('red');
  textStyle(BOLD);
  const nameWidth = textWidth(name);
  console.log(nameWidth);
  text(name, canvasWidth / 2 - nameWidth / 2, 200)
}

