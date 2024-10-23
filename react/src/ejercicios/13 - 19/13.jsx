/* Crear un componente en React para mostrar un encabezado de página. Usar props para pasar el nombre y logo
de la marca */
function Header(props) {
  return (
    <>
      <header>{props.nombre}</header>
      <img src={props.logo} alt={props.alt} />
    </>
  )  
}

export default Header;