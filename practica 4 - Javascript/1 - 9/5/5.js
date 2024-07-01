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

function convertToRoman(n) {
  while (n > 999 && n % 1000 >= 0) {
    n -= 1000;
  }
  while (n > 499 && n % 500 >= 0) {
    n -= 500;
  }
  while (n > 99 && n % 100 >= 0) {
    n -= 100;
  }
  while (n > 49 && n % 50 >= 0) {
    n -= 50;
  }
  while (n > 9 && n % 10 >= 0) {
    n -= 10;
  }
  while (n > 4 && n % 5 >= 0) {
    n -= 5;
  }
  while (n > 0 && n % 1 == 0) {
    n--;
  }
  return n;
}
convertToRoman(argv[0]);
