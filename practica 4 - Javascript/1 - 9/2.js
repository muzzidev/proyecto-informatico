//Escribir una función factorial(n) que calcule 𝑛! con 𝑛 ∈ ℕ
const args = process.argv.slice(2);

function factorial(n){
  let res = 1;
  if(n > 0){
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
  }else{
    res = NaN;
  }
  return res;
}
console.log(factorial(args[0]));
