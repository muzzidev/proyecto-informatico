let formulario = document.querySelector(".form");
formulario.addEventListener("submit", (event) => isLeap(event))

function isLeap(event) {
    event.preventDefault();
    if (document.querySelector(".resultado")) document.querySelector(".resultado").remove();
    let contenido = event.target.bien.checked;
    let respuesta = document.createElement("h1");
    respuesta.classList.add("resultado");
    respuesta.textContent = (contenido ? "Eso es una verdad" : "Por qué me mentís");
    document.body.append(respuesta);
}
