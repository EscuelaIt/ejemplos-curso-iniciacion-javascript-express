console.log(Math.PI);
console.log(Math.SQRT2);

for(let i = 0; i < 30; i++) {
  console.log(aleatorio(1, 3));
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let apariciones = [0, 0, 0, 0];
for(let i = 0; i < 1000000; i++) {
  apariciones[aleatorio(1, 3)]++;
}
console.log(apariciones);