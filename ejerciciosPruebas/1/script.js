let formulario = document.querySelector(".form");

formulario.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event.target.name);
})