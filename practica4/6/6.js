let boton = document.getElementById("boton");

function isLeap(event) {
    event.preventDefault();
    let contenido = event.target.num.value;
    let numero = document.createElement("h3");
    numero.textContent = (contenido % 4 == 0 && contenido % 100 != 0) || (contenido % 400 == 0) ? "Es bisiesto" : "No es bisiesto";
    event.target.append(numero);
}