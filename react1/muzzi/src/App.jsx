import { useState } from "react"

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <>
      {isLoggedIn && <p>Bienvenido</p>}
      <button>{textoBoto}</button>
    </>
  )
}