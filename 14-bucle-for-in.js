let persona = {
  id: 45,
  nombre: 'Miguel Angel',
  genero: 'Masculino',
  prefiereEnviosEmail: true,
}

for(atributo in persona) {
  console.log(atributo);
  console.log(persona[atributo]);
}