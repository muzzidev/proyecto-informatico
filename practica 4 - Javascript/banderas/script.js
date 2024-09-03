/* Muestrame el HTML, CSS, y Javascript de un programa en el cual tengas tres botones, 2 sean nombres falsos y uno el verdadero de una bandera que obtendras a partir de un fetch a partir de la siguiente API. Abajo deberá tener un bot´´on para que te genere otra bandera aleatoria */


let form = document.querySelector(".formulario");
let paises = [];
let contenedor = document.querySelector(".bandera");
let mensaje = document.createElement("h1");
let botonCorrecto;
const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then(res => res.json())
  .then(data => {
    paises = data
    generarPais();
  })

function generarPais() {
  let idBotonCorrecto = Math.floor(Math.random() * 3);
  botonCorrecto = document.getElementById(idBotonCorrecto);
  contenedor.innerHTML = '';
  let paisRandom = Math.floor(Math.random() * paises.length);
  let pais = paises[paisRandom];
  let imagen = document.createElement("img");
  imagen.style.border = "1px solid black";
  imagen.style.padding = "20px";
  imagen.style.margin = "20px";
  imagen.src = pais.flags.png;
  contenedor.append(imagen);
  botonCorrecto.textContent = pais.name.common;
  for (let i = 0; i < 3; i++) {
    if (i == idBotonCorrecto) continue;
    let botonFalso = document.getElementById(i);
    botonFalso.textContent = paises[i].name.common;
  }
  console.log(pais.name.common);
}

function comprobar(e) {
  mensaje.textContent = '';
  mensaje = document.createElement("h1");
  
  if (e.target.id == botonCorrecto.id) {
    mensaje.textContent = "correcto loco";
    mensaje.style.color = "green";
    generarPais();
  } else {
    mensaje.textContent = "otra vez";
    mensaje.style.color = "red";
  }

  document.body.append(mensaje);
}