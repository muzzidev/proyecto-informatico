//Escribir una función factorial(n) que calcule 𝑛! con 𝑛 ∈ ℕ

let formulario = document.querySelector(".form");

formulario.addEventListener("submit", event => {
  event.preventDefault();

  if(document.querySelector(".resultado")) document.querySelector(".resultado").remove();

  let numero = event.target.num.value;
  let textoResultado = document.createElement("h1");
  let resultado = factorial(numero);

  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
});

function factorial(n){
  let res = 1;
  if(n > 0){
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
  }else{
    res = "Ingrese un número válido";
  }
  return res;
}