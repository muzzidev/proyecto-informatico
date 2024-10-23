import axios from "axios";
import { useEffect, useState } from "react";

function Trivia() {
  const [indice, setIndice] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const url = 'https://opentdb.com/api.php?amount=10&type=multiple';


  const mezclarArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    axios.get(url).then(res => {
      const data = res.data.results;
      setPreguntas(data);
    });
  }, []);


  useEffect(() => {
    if (preguntas.length > 0) {
      const preguntaActual = preguntas[indice];
      const respuestasMezcladas = mezclarArray([...preguntaActual.incorrect_answers, preguntaActual.correct_answer]);
      setRespuestas(respuestasMezcladas);
    }
  }, [indice, preguntas]);

  const verificarRespuesta = (respuestaSeleccionada, correcta) => {
    if (respuestaSeleccionada === correcta) setPuntaje(puntaje + 1);
    setIndice(indice + 1);
  };

  if (!preguntas.length) return <h3>Cargando...</h3>;

  if (indice >= preguntas.length) return <h3>Puntaje: {puntaje} de {preguntas.length}</h3>;

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: preguntas[indice].question }}></h3>
      <ul>
        {respuestas.map((respuesta, idx) => (
          <li key={idx}>
            <button onClick={() => verificarRespuesta(respuesta, preguntas[indice].correct_answer)} dangerouslySetInnerHTML={{ __html: respuesta }}></button>
          </li>
        ))}
      </ul>
      <h4>Puntaje: {puntaje}</h4>
    </>
  );
}

export default Trivia;
