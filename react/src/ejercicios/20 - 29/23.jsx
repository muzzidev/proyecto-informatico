/* Crear un componente para mostrar una tarjeta de un Pokemon. Usar una barra de búsqueda para buscar un
Pokemon por nombre. Usar la API en https://pokeapi.co/api/v2/. */

import { useState, useEffect } from "react";
import axios from "axios";

function Pokemon() {
  const [nombre, setNombre] = useState('');
  const [imagen, setimagen] = useState('');

  useEffect(() => {
    if (nombre) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
        .then(res => {
          setimagen(res.data.sprites.front_default);
        })
    }
  }, [nombre])
  
  function handleChange(e) {
    setNombre(e.target.value);
  }
  
  return (
    <>
      <div>
        <h1>Buscar pokemon en inglés</h1>
        <input 
          type="text" 
          defaultValue={nombre} 
          onChange={handleChange} 
        />
      </div>

      <div className="card">
        <img src={imagen} alt={nombre} />
        <h1>el pokemon es {nombre}</h1>
      </div>
    </>
  );
}

export default Pokemon;