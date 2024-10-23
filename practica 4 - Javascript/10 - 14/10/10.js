/*3. Crear un carousel usando HTML, CSS y JavaScript*/

let elemento = document.querySelector(".menu")
function openMenu() {
  let nuevoElemento1 = document.createElement("div");
  nuevoElemento1.classList.add("elemento");
  elemento.append(nuevoElemento1);
}