/* Crear un componente en React para mostrar una barra de navegación. Obtener los nombres de los links a partir
de un array */

function Nav() {
  let array = ["casa", "indice", "buscar", "sobre mi"];
  return (
    <>
      <ul>
        {array.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </>
  )  
}

export default Nav;