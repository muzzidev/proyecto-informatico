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

let I = 1;
let II = 2;
let III = 3;
let IV = 4;
let V = 5;
let VI = 6;
let VII = 7;
let IIX = 8;
let IX = 9;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;

function convertToRoman(n) {
  let respuesta = "";
  while (n > 999 && n % 1000 >= 0) {
    n -= M;
    respuesta += "M";
  }
  while (n > 499 && n % 500 >= 0) {
    n -= D;
    respuesta += "D";

  }
  while (n > 99 && n % 100 >= 0) {
    n -= C;
    respuesta += "C";

  }
  while (n > 49 && n % 50 >= 0) {
    n -= L;
    respuesta += "L";
  }
  while (n > 9 && n % 10 >= 0) {
    n -= X;
    respuesta += "X";
  }
  while (n == 9) {
    n -= IX;
    respuesta += "IX";
  }
  while (n == 8) {
    n -= IIX;
    respuesta += "IIX";
  }
  while (n == 7) {
    n -= VII;
    respuesta += "VII";
  }
  while (n == 6) {
    n -= VI;
    respuesta += "VI";
  }
  while (n == 5) {
    n -= V;
    respuesta += "V";
  }
  while (n == 4) {
    n -= IV;
    respuesta += "IV";
  }
  while (n == 3) {
    n -= III;
    respuesta += "III";
  }
  while (n == 2) {
    n -= II;
    respuesta += "II";
  }
  while (n == 1) {
    n -= I;
    respuesta += "I";
  }
  return respuesta;
}