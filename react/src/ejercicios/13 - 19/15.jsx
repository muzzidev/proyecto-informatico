/* Crear un componente que muestre un h1 con un número al azar entre 1 y 1000. Al clickear el h1 elegir un nuevo
número. */

import React, {useState} from 'react'


function H1() {
  const [random, setRandom] = useState(Math.ceil(Math.random() * 1000));

  function actualizar() {
    setRandom(Math.ceil(Math.random() * 1000))
  }

  return (
    <h1 onClick={actualizar}>{random}</h1>
  )
}

export default H1;