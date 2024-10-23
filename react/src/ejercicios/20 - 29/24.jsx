import { useState } from "react";
import axios from "axios";

function Feriado() {
  const [dias, setDias] = useState(0);
  const [proximo, setProximo] = useState(0);
  let hoy = new Date().getTime() / 1000 / 60 / 60 / 24;



  const url = "https://api.argentinadatos.com/v1/feriados/2024";

  axios.get(url)
    .then(res => {
      let i = 0;
      while (new Date().getTime() > (new Date(res.data[i].fecha).getTime()) ) i++;
      console.log(i);

      setProximo((new Date(res.data[i].fecha).getTime()) / 1000 / 60 / 60 / 24);

      setDias(proximo - hoy);
      
    })

  return (
    <h1>faltan {Math.round(dias)} días para el proximo feriado.</h1>
  )
}

export default Feriado;