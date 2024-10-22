function burbuja() {
  let radio = Math.round(Math.random() * 255);
  let burbuja = document.createElement("div");
  burbuja.classList.add("burbuja");
  burbuja.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  burbuja.style.width = radio + "px";
  burbuja.style.height = radio + "px";
  burbuja.style.left = Math.round(Math.random() * (document.documentElement.clientWidth - radio)) + "px";
  burbuja.style.top = Math.round(Math.random() * (document.documentElement.clientHeight - radio)) + "px";
  document.body.append(burbuja);
}
function dibujar() {
  setInterval(() => burbuja(), 50);
}