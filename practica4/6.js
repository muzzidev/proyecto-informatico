let element = document.getElementById("#input");
let contenido = parseInt(element.textContent);
function isLeap(contenido) {
    return (contenido % 4 == 0 && contenido % 100 != 0) || (contenido % 400 == 0) ? "Es bisiesto" : "No es bisiesto";
}
isLeap(2024);