let r = document.getElementById('r');
let x = document.getElementById('x');
let y = document.getElementById('y');

let circulo = document.createElement('div');
circulo.addEventListener('click', circuloCrear);

function circuloCrear(e){
  if (e.target.id == 'subir'){
    circulo.style.width=`${r}*2px`
    circulo.style.height=`${r}*2px`
    circulo.style.top=`${y}px`
    circulo.style.width=`${x}px`
  }
}