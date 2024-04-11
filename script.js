let speech  = new SpeechSynthesisUtterance();


let voices = [];

let Selectvoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged =  () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (Selectvoice.options[i] = new Option(voice.name, i)));
};

Selectvoice.addEventListener("change", () =>{
    speech.voice = voices[Selectvoice.value];
})






document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})