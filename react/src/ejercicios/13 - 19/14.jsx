/* Crear un componente en React para mostrar una barra de navegación. Obtener los nombres de los links a partir
de un array */

function Nav(props) {
  let array = ["casa", "indice", "buscar"]
  return (
    <>
      <ul>
        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
      </ul>
    </>
  )  
}

export default Nav;