/* Lista de tareas */

import { useState } from "react";

function Todo() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tarea) return;
    const nuevaTarea = {
      id: Math.floor(Math.random() * 10000000),
      nombre: tarea
    };
    setTareas([...tareas, nuevaTarea]);
    setTarea('');
  }

  const handleChange = (e) => setTarea(e.target.value);
  
  const handleClick = (e) => {
    const nuevaLista = tareas.filter(tarea => e.target.dataset.item != tarea.id)
    setTareas(nuevaLista);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>ingresa una tarea nueva</h2>
        <input 
          type="text"
          value={tarea}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
      <ol>
        {tareas.map((item) => (
          <li key={item.id}>
            {item.nombre} ({item.id})
            <button data-item={item.id} onClick={handleClick}>Eliminar</button>
          </li>)
        )}
      </ol>
    </div>
  )
}

export default Todo;