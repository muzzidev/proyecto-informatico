let formulario = document.querySelector(".form");
formulario.addEventListener("submit", (event) => isLeap(event))

function isLeap(event) {
    event.preventDefault();
    if (document.querySelector(".resultado")) document.querySelector(".resultado").remove();
    let contenido = event.target.num.value;
    let es_bisiesto = document.createElement("h1");
    es_bisiesto.classList.add("resultado");
    es_bisiesto.textContent = (contenido % 4 == 0 && contenido % 100 != 0) || (contenido % 400 == 0) ? "Es bisiesto" : "No es bisiesto";
    document.body.append(es_bisiesto);
}
