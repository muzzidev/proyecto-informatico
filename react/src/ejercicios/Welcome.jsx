import { useState } from "react";

function Welcome() {
  const [usuario, setUsuario] = useState(false);
  
  const cambiarEstado = () => {
    setUsuario(!usuario);
  }

  return (
    <>
      <h1>{(usuario) ? "ASD" : "INICIAR SESION"}</h1>
      <button onClick={cambiarEstado}>{(usuario) ? "CERRAR SESION" : "INICIAR SESION"}</button>
    </>
  )
}

export default Welcome;