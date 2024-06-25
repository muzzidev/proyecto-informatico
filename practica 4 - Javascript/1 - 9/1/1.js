// 1. Escribir una función power(x,n) que calcule 𝑥^𝑛, con 𝑛 ∈ ℕ

let formulario = document.querySelector(".form"); // Declaro una variable formulario y le asigno el formulario del HTML
formulario.addEventListener("submit", event => handeSubmit(event)); // Cuando javascript escucha un submit viniendo del formulario, acciona la función handleSubmit

// Funcion handleSubmit
function handeSubmit(event){ 
  event.preventDefault(); // Evita que se recarge la página
  let base = event.target.base.value; // Guardo el valor del input base en una variable llamada base
  let exponente = event.target.exponente.value; // Guardo el valor del input exponente en una variable llamada exponente
  if(document.querySelector(".resultado")) // Si ya existe el elemento que te muestra el resultado lo borra antes de mostrarlo devuelta
    document.querySelector(".resultado").remove();

  let resultado = power(base, exponente); // Guardo el resultado de la potencia en una variable resultado
  let textoResultado = document.createElement("h1"); // Crea un elemento h1 y lo guarda en textoResultado
  textoResultado.classList.add("resultado");  // le añade la clase resultado al textoResultado
  textoResultado.textContent = resultado; // El texto de textoResultado es lo que vale la potencia guardada en la variable resultado
  document.body.append(textoResultado); // Agrego el elemento creado al body del documento
}

// Funcion que calcula la potencia
function power(x, n){
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= x;
  }
  return res;
}