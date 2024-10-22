/* Escribir una función convertToRoman(n) que convierta un número entero 𝑛 en decimal a números romanos */
let formulario = document.querySelector(".form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector(".resultado"))
    document.querySelector(".resultado").remove();
  let numero = event.target.num.value;
  let resultado = convertToRoman(numero);
  let textoResultado = document.createElement("h1");
  textoResultado.textContent = resultado;
  textoResultado.classList.add("resultado");
  document.body.append(textoResultado);
});

let romanos = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  IIX: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1
}

function convertToRoman(n) {

  let respuesta = "";

  for (let key in romanos) {
    while (n >= romanos[key]) {
      respuesta += key;
      n -= romanos[key];
    }
  }
  
  return respuesta;
}