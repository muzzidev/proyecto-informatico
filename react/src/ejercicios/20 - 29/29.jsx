/*  Crear una aplicación para jugar trivias usando la API en https://opentdb.com. Mostrar el puntaje obtenido al
final de cada trivia */

import axios from "axios";
import { useEffect, useState } from "react";

function Trivia() {
  const [indice, setindice] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuesta, setRespuesta] = useState('');
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setPreguntas(res.data.results);
    })
  }, [])

  const verificar = (e) => {
    if(e.target.id == 'true') {
      setRespuesta('Muy bien');
      setindice(indice + 1);
    } else if(e.target.id == 'false') {
      setRespuesta('Muy mal');
    } 
  }

  const preguntaActual = preguntas[indice];
  console.log(preguntaActual);
  

  if (preguntas.length === 0) {
    return (
      <>
        <h3>Loading...</h3>
        <p>si se queda cargando recarga la pagina</p>
      </>
    )
  }

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: preguntaActual.question }}></h3>
      <ul>
        <li><button id="true" onClick={verificar} dangerouslySetInnerHTML={{ __html: preguntaActual.correct_answer }}></button></li>
        <li><button id="false" onClick={verificar} dangerouslySetInnerHTML={{ __html: preguntaActual.incorrect_answers[0] }}></button></li>
        <li><button id="false" onClick={verificar} dangerouslySetInnerHTML={{ __html: preguntaActual.incorrect_answers[1] }}></button></li>
        <li><button id="false" onClick={verificar} dangerouslySetInnerHTML={{ __html: preguntaActual.incorrect_answers[2] }}></button></li>
      </ul>
      <h4>{respuesta}</h4>
    </>
  )
}
export default Trivia;