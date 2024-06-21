/*3. Escribir una función que recibe tres argumentos de tipo string que son nombres de colores de una resistencia de
cuatro bandas. Los argumentos son los dos primeros dígitos y el multiplicador. La función tiene que devolver
el valor numérico en Ohms de la resistencia. Los colores en orden del 0 al 9 son: negro, marrón, rojo, naranja,
amarillo, verde, azul, violeta, gris y blanco. No usar if ... else.*/

const argv = process.argv.slice(2);
function valorResistencia(b1, b2, b3){
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
  return (colores[b1]*10 + colores[b2]) * 10 ** b3 + " Ohms";
}

console.log(valorResistencia(argv[0], argv[1], argv[2]));