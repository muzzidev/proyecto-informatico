// Trivia.js
import axios from "axios";
import { useEffect, useState } from "react";

function Trivia() {
  const [preguntas, setPreguntas] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0); // Para navegar por las preguntas
  const [puntaje, setPuntaje] = useState(0); // Para el puntaje del usuario
  const [triviaTerminada, setTriviaTerminada] = useState(false);

  const url = 'https://opentdb.com/api.php?amount=10';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPreguntas(res.data.results); // Guardar todas las preguntas
      })
      .catch(err => {
        console.error("Error al obtener preguntas", err);
      });
  }, []);

  // Manejar la selección de la respuesta
  const manejarRespuesta = (respuestaSeleccionada) => {
    const preguntaActual = preguntas[indiceActual];
    
    // Verificar si la respuesta es correcta
    if (respuestaSeleccionada === preguntaActual.correct_answer) {
      setPuntaje(puntaje + 1);
    }

    // Pasar a la siguiente pregunta o terminar trivia
    const siguienteIndice = indiceActual + 1;
    if (siguienteIndice < preguntas.length) {
      setIndiceActual(siguienteIndice);
    } else {
      setTriviaTerminada(true); // Marcar trivia como terminada
    }
  };

  if (triviaTerminada) {
    return (
      <div>
        <h1>¡Trivia terminada!</h1>
        <p>Puntaje final: {puntaje} de {preguntas.length}</p>
      </div>
    );
  }

  const preguntaActual = preguntas[indiceActual];
  const respuestas = [...preguntaActual.incorrect_answers, preguntaActual.correct_answer];
  const respuestasMezcladas = respuestas.sort(() => Math.random() - 0.5);

  if (preguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  return (
    <div>
      <h1>Trivia</h1>
      <p>{preguntaActual.question}</p>
      <ul>
        {respuestasMezcladas.map((respuesta, index) => (
          <li key={index}>
            <button onClick={() => manejarRespuesta(respuesta)}>
              {respuesta}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trivia;
