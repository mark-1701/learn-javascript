export default function keyboardShortcuts() {

    function handleKeyboard(e) {

        if (e.ctrlKey && e.key === "c") {
            e.preventDefault();
            alert("Comando Control + C"); 
        }

    }

    window.addEventListener('keydown', handleKeyboard);
}