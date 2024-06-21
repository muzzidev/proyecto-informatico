// 1. Escribir una función power(x,n) que calcule 𝑥^𝑛, con 𝑛 ∈ ℕ

let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => handeSubmit(event));

function handeSubmit(event){
  let base = event.target.base.value;
  let exponente = event.target.exponente.value;

}

function power(x, n){
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= x;
  }
  return res;
}