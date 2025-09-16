
const contadorElement = document.getElementById("contador");

let contadorFrases = 0;

function actualizarContador() {
  contador++;
  contadorElement.textContent = `Frases mostradas: ${contador}`;
}

generateBtn.addEventListener("click", () => {
  actualizarContador();
});