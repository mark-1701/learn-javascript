export default function speechSynthesisControl() {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    const $comboBox = document.querySelector("#voices"); 
    const $form = document.querySelector("#voice-reader-form"); 
    let voices;

    synthesis.addEventListener("voiceschanged", (event) => {
        voices = synthesis.getVoices();
        voices.forEach(element => {
            let $option = document.createElement("option"); 
            $option.textContent = element.name; 
            $comboBox.appendChild($option);
        });
        // utterance.voice = voices[3];
        // synthesis.speak(utterance);
    });

    document.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault(); 
            //SELECCIONAR LA VOZ SELECCIONADA
            let selectedVoice = voices.find(voice => voice.name === $form.voices.value);
            utterance.text = $form.text.value; 
            utterance.voice = selectedVoice; 
            synthesis.speak(utterance); 
        }
    }); 
}