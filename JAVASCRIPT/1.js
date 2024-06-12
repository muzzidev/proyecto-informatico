// 1. Escribir una función power(x,n) que calcule 𝑥^𝑛, con 𝑛 ∈ ℕ

function power(n){
  let result = 1;
  for (let i = 1, i <= n; i++) {
    result *= i;
  }
  return result;
}
power(10);
