const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("click", sumarInputValues);

function sumarInputValues(event) {
  //console.log({event});
  event.preventDefault();
  const suma = input1.value + input2.value;
  pResult.innerText = "El total es " + suma;
}

window.addEventListener('resize', function() {
  console.log('El tamaño de la ventana ha cambiado');
});

document.querySelector('#miCampoDeTexto').addEventListener('keydown', function(event) {
  console.log(`Presionaste la tecla ${event.key}`);
});