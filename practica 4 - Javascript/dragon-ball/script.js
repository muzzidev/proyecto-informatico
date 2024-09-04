const url = "https://dragonball-api.com/api/characters";

let contenedor = document.querySelector(".contenedor");
let personajesArray = [];
let personajesEnPantalla = [];
let ganador = document.createElement("h3");

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data.items);
    personajesArray = data.items;
    generarPersonaje();
  })

function generarPersonaje() {
  contenedor.innerHTML = ''
  for(let i = 0; i < 2; i++) {
    let personajeId = Math.floor(Math.random() * personajesArray.length);
    let personaje   = personajesArray[personajeId];
    let carta       = document.createElement("div");
    let imagen      = document.createElement("img");
    let nombre      = document.createElement("h1");
    let ki          = document.createElement("h2");
    carta.classList.add("carta");
    nombre.textContent = personaje.name;
    personaje.ki    = personaje.ki.replaceAll(".", "");
    imagen.src      = personaje.image;
    ki.textContent  = personaje.ki;
    carta.append(imagen);
    carta.append(nombre);
    carta.append(ki);
    contenedor.append(carta);
    personajesEnPantalla[i] = personaje;
  }
  if (personajesEnPantalla[0].ki > personajesEnPantalla[1].ki) {
    ganador.textContent = "el ganador es" + personajesEnPantalla[0].name;
  } else {
    ganador.textContent = "el ganador es" + personajesEnPantalla[1].name;
  }
  contenedor.append(ganador);
}