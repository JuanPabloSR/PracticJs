let infoLuffy = {
  name: "Monkey D. Luffy",
  age: 19,
  wanted: 3000000000,
  rol: "Captain",
};

function printInfo(Objeto) {
  for (let propiedad in Objeto) {
    console.log(Objeto[propiedad]);
  }
}

printInfo(infoLuffy);
