const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector("parrafo");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log({
  h1,
  p,
  parrafo,
  pid,
  input,
});

console.log(input.value);

//Nos permite modificar una etiqueta
h1.innerHTML = "toc, toc quien es? <br> yo, el chapulin colorado";
h1.setAttribute("pantalla", "lg");
console.log(h1.getAttribute("pantalla"));

// p.setAttribute('class', 'xd')
// console.log(p.getAttribute('class'))

// p.classList.add('verde')
// p.classList.remove('verde')

console.log(p.getAttribute("class"));

// input.value('xdxd')
const img = document.createElement("img");

img.setAttribute('src','https://i.pinimg.com/originals/af/17/a4/af17a45936d0a6a129d72b2165e90a7f.jpg')


console.log(img)

pid.innerHTML = ''
pid.append(img)

