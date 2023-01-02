while (true) {
  let respuesta = prompt(
    "Cuanto es 2 + 2? tranquilo si no respondes bien lo puedes intentar tantas veces quieras"
  );

  respuesta = Number(respuesta);

  if (respuesta === 4) {
    alert("felicidades es 4, se nota que pasaste matematicas");
    break;
  } else {
    alert("burro")
  }
}
