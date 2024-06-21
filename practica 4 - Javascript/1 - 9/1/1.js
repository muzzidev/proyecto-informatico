// 1. Escribir una función power(x,n) que calcule 𝑥^𝑛, con 𝑛 ∈ ℕ

let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => handeSubmit(event));

function handeSubmit(event){
  event.preventDefault();
  let base = event.target.base.value;
  let exponente = event.target.exponente.value;
  if(document.querySelector(".resultado"))
    document.querySelector(".resultado").remove();

  let resultado = power(base, exponente);
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
}

function power(x, n){
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= x;
  }
  return res;
}