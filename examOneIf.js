let tipoDeSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];

let infoSuscripcion = [
  "solo puedes tomar los cursos gratis",
  "puedes tomar casi todos los cursos de Platzi durante un mes",
  "puedes tomar casi todos los cursos de Platzi durante un año",
  "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
let suscripcion = "Basic"

for(let i=0; i < tipoDeSuscripcion.length; i++) {
    if (suscripcion == tipoDeSuscripcion[i]) {
        console.log(`estas suscrito a platzi, tu suscripcion es ${tipoDeSuscripcion[i]} , en el cual ${infoSuscripcion[i]}`)
    }
}
