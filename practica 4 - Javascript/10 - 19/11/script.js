/* Escribir una función buildGallery(photos) que arme una galería de fotos usando los datos obtenidos de la
siguiente API: https://jsonplaceholder.typicode.com/albums/1/photos. El argumento debe ser una lista
(array) de fotos. */

const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

let photosArray = [];
let main = document.querySelector("main");

fetch(url)
 .then(res => res.json())
 .then((data) => {
  let photos = data;
  createArray(photos)
  buildGalery(photosArray);
 })

function createArray(photos) {
  for (let i = 0; i < 10; i++){
    photosArray.push(photos[photo]);
    photo++;
  }
}

function buildGalery(photosArray) {
  for (const photo of photosArray) {
    let div = document.createElement("div");
    let card = document.createElement("img");
    card.src = photo.url;
    div.append(card);
    main.append(div);
  }
}