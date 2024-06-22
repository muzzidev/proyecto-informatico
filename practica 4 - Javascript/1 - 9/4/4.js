/* Escribir una función que fibonacci(n) que devuelva un array con los primeros 𝑛 números de la sucesión de
Fibonacci. */

let formulario = document.querySelector(".form");

formulario.addEventListener("submit", event => {
  event.preventDefault();
  let numero = event.target.n.value;

  if (document.querySelector(".resultado"))
    document.querySelector(".resultado").remove();

  let textoResultado = document.createElement("h1");
  let resultado = fibonacci(numero);

  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;

  document.body.append(textoResultado);
})

function fibonacci(n){
  let g, h, temp;
  g = 0;
  h = 1;
  for (let i = 0; i < n; i++) {
    temp = g + h;
    g = h;
    h = temp;
  }
  return temp;
}
console.log(fibonacci(argv[0]));
