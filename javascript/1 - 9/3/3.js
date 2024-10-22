/*3. Escribir una función que recibe tres argumentos de tipo string que son nombres de colores de una resistencia de
cuatro bandas. Los argumentos son los dos primeros dígitos y el multiplicador. La función tiene que devolver
el valor numérico en Ohms de la resistencia. Los colores en orden del 0 al 9 son: negro, marrón, rojo, naranja,
amarillo, verde, azul, violeta, gris y blanco. No usar if ... else.*/

let formulario = document.querySelector(".form")
formulario.addEventListener("submit", event => {
  event.preventDefault();
  let b1 = event.currentTarget.b1.value;
  let b2 = event.currentTarget.b2.value;
  let b3 = event.currentTarget.b3.value;
  
  if (document.querySelector(".resultado"))
    document.querySelector(".resultado").remove();

  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = valorResistencia(b1, b2, b3);
  document.body.append(textoResultado);
})

let colores = {
  negro: 0,
  marron: 1,
  rojo: 2,
  naranja: 3,
  amarillo: 4,
  verde: 5,
  azul: 6,
  violeta: 7,
  gris: 8,
  blanco: 9    
}

function valorResistencia(b1, b2, b3){
  let resultado = (colores[b1]*10 + colores[b2]) * (10 ** colores[b3]);
  return (`${resultado} Ohms`);
}