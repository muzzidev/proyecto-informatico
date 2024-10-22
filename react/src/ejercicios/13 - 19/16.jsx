/* Crear un componente para mostrar un producto usando al menos un título, descripción, precio e imagen */

function Prod(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>{props.desc}</p>
      <h4>{props.precio}</h4>
      <img src={props.imagen} alt="imagen del producto"/>
    </div>
  )
}

export default Prod;