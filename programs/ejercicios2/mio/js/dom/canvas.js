export default function canvasControl(newCanvas) {
    const canvas = document.querySelector(newCanvas);
    const ctx = canvas.getContext('2d');

    const canvasWith = canvas.width;
    const canvasHeigth = canvas.height;
    
    let x = canvasWith / 2; // Posición inicial x del objeto
    let y = canvasHeigth / 2; // Posición inicial y del objeto

    const radio = 30;

    function drawObject() {
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.fillStyle = 'skyblue'; // Cambia el color si lo deseas
        ctx.fill();
        ctx.closePath();
    }

    drawObject();

    function handleKeyboard(e) {
        const step = 10; // Cantidad de píxeles que se moverá el objeto
        const leftWall = radio;
        const rightWall = canvasWith - radio;
        const upperWall = radio;
        const bottonWall = canvasHeigth - radio;


        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
        }

        switch (e.key) {
            case 'ArrowLeft':
                if (x - step >= leftWall) x -= step;
                break;
            case 'ArrowRight':
                if (x + step <= rightWall) x += step;
                break;
            case 'ArrowUp':
                if (y - step >= upperWall) y -= step;
                break;
            case 'ArrowDown':
                if (y + step <= bottonWall) y += step;
                break;
        }

        //Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawObject();

    }

    // Escuchar eventos de teclado
    window.addEventListener('keydown', handleKeyboard);
}