
const texts = [
    "¡Hola Adam! ¿Cómo estás?",
    "¿Te gusta el fútbol?",
    "Vamos a aprender español juntos."
];

function changeText(index) {
    document.getElementById("speech-text").textContent = texts[index];
    playAudio(index);
}

function playAudio(index) {
    const audio = document.getElementById(`audio-${index}`);
    if (audio) {
        audio.play();
    }
}
