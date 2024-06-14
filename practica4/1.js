// 1. Escribir una función power(x,n) que calcule 𝑥^𝑛, con 𝑛 ∈ ℕ
const args = process.argv.slice(2);

function power(x, n){
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= x;
  }
  return res;
}
console.log(power(args[0], args[1]));
