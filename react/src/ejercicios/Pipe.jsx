import { useEffect, useState } from "react";
import axios from "axios";

function Pipe() {
  const [array, setArray] = useState([]);
  const [state, setState] = useState(false);
  let url = 'https://pokeapi.co/api/v2/pokemon/';
  let data;
  const mostrarLista = array.map((item, idx) => 
    (idx < 3) && <li key={idx}>{item}</li>
  )
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        data = res.data.results.map(pokemon => pokemon.name);
        setArray(data);
      })
  }, [])
  

  return (
    <>
      <ul>
        <button onClick={() => setState(!state)}>Cambiar</button>
        {state && mostrarLista}
      </ul>
      
    </>
  )
}

export default Pipe;