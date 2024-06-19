/* Escribir una función que fibonacci(n) que devuelva un array con los primeros 𝑛 números de la sucesión de
Fibonacci. */

const argv = process.argv.slice(2);

function fibonacci(n){
  let sucesion = [];
  let g, h, temp;
  g = 0;
  h = 1;
  for (let i = 0; i < n; i++) {
    sucesion.push(g);
    temp = g + h;
    g = h;
    h = temp;
  }
  return sucesion;
}
console.log(fibonacci(argv[0]));
