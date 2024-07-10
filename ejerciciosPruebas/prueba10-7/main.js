///princi//

let main = document.getElementById("main");
let botonMas = document.getElementById('mas');
let botonMenos = document.getElementById('menos');
let num = 0;

document.addEventListener('click', event => handleSubmit(event))


function handleSubmit(event) {

	let parrafo = document.getElementById('numero');
	if (event.target.id == "mas") {
		num++
		parrafo.textContent = num;
	}
	else if (event.target.id == "menos" && num >= 10) {
		num -= 10
		parrafo.textContent = num;
		let main = document.getElementById("main");
		let r1 = Math.floor(Math.random() * 255)
		let r2 = Math.floor(Math.random() * 255)
		let g1 = Math.floor(Math.random() * 255)
		let g2 = Math.floor(Math.random() * 255)
		let b1 = Math.floor(Math.random() * 255)
		let b2 = Math.floor(Math.random() * 255)
		main.style.background = `linear-gradient(rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
	}

}

