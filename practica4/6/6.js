let formulario = document.querySelector(".form");
let botonLimpiar = document.querySelector(".boton-limpiar")

formulario.addEventListener("submit", (event) => isLeap(event))
botonLimpiar.addEventListener("click", (event) => clean(event));

function isLeap(event) {
    event.preventDefault();
    let contenido = event.target.num.value;
    let es_bisiesto = document.createElement("h3");
    es_bisiesto.textContent = (contenido % 4 == 0 && contenido % 100 != 0) || (contenido % 400 == 0) ? "Es bisiesto" : "No es bisiesto";
    event.target.append(es_bisiesto);
}
    
function clean(event) {
    event.preventDefault();
    document.querySelector("h3").remove();
}