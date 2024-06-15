/*3. Escribir una función que recibe tres argumentos de tipo string que son nombres de colores de una resistencia de
cuatro bandas. Los argumentos son los dos primeros dígitos y el multiplicador. La función tiene que devolver
el valor numérico en Ohms de la resistencia. Los colores en orden del 0 al 9 son: negro, marrón, rojo, naranja,
amarillo, verde, azul, violeta, gris y blanco. No usar if ... else.*/

const argv = process.argv.slice(2);
function valorResistencia(color1, color2, multiplicador){
  switch (color2) {
    case 'negro':
      color2 = 0;
      break;
    case 'marron':
      color2 = 1;
      break;
    case 'rojo':
      color2 = 2;
      break;
    case 'naranja':
      color2 = 3;
      break;
    case 'amarillo':
      color2 = 4;
      break;
    case 'verde':
      color2 = 5;
      break;       
    case 'azul':
      color2 = 6;
      break;
    case 'violeta':
      color2 = 7;
      break;
    case 'gris':
      color2 = 8;
      break; 
    case 'blanco':
      color2 = 9;
      break;
    default:
      return "por favor introduzca un color valido";
  }
  switch (color1) {
    case 'negro':
      color1 = 0;
      break;
    case 'marron':
      color1 = 1;
      break;
    case 'rojo':
      color1 = 2;
      break;
    case 'naranja':
      color1 = 3;
      break;
    case 'amarillo':
      color1 = 4;
      break;
    case 'verde':
      color1 = 5;
      break;       
    case 'azul':
      color1 = 6;
      break;
    case 'violeta':
      color1 = 7;
      break;
    case 'gris':
      color1 = 8;
      break; 
    case 'blanco':
      color1 = 9;
      break;
    default:
      return "por favor introduzca un color valido";
  }
  return (color1 + color2) * multiplicador + " Ohms";
}

console.log(valorResistencia(argv[0], argv[1], argv[2]));
