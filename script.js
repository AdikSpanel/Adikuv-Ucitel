
const texts = [
    "¡Hola Adam! ¿Cómo estás?",
    "¿Te gusta el fútbol?",
    "Vamos a aprender español juntos."
];

function changeText(index) {
    document.getElementById("speech-text").innerText = texts[index];
    playAudio(index);
}

function playAudio(index) {
    document.getElementById(`audio-${index}`).play();
}
