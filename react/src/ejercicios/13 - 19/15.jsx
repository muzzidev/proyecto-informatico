/* Crear un componente que muestre un h1 con un número al azar entre 1 y 1000. Al clickear el h1 elegir un nuevo
número. */

function H1() {
  let random = Math.ceil(Math.random() * 1000);
  
  return (
    <h1>{random}</h1>
  )
}

export default H1;