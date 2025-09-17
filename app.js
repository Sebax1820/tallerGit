// Array con frases motivacionales y chistes
const frases = [
    "¡Tú puedes lograr todo lo que te propongas! El éxito está a solo un paso de distancia. 💪",
    "¿Sabes por qué los pájaros vuelan hacia el sur en invierno? ¡Porque caminar sería muy cansado! 🐦",
    "El fracaso no es lo opuesto al éxito, es parte del camino hacia él. ¡Sigue adelante! 🌟",
    "¿Qué le dice un semáforo a otro? ¡No me mires, me estoy cambiando! 🚦",
    "Cada día es una nueva oportunidad para ser la mejor versión de ti mismo. ¡Aprovéchala! ☀️",
];

const phraseDisplay = document.getElementById('frase');
const generateBtn = document.getElementById('btn-frase');


function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

function mostrarFrase() {
    const fraseAleatoria = obtenerFraseAleatoria();
    phraseDisplay.innerHTML = `<p>${fraseAleatoria}</p>`;
}

generateBtn.addEventListener('click', () => {
    mostrarFrase();
});


