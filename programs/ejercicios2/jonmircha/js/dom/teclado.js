const d = document;
let x = 0, y = 0;


export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        //getBoundingClientRect responde con las medidas del objeto y nos dice que tan alejado esta del botton, left, right y top
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    //console.log(e.keyCode);
    //console.log(e.key);
    //console.log(limitsBall, limitsStage)

    const move = direction => {

    }

    switch (e.keyCode) {
        case 37:
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--
            }
            break;
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--
            }
            break;
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++
            }
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++
            }
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;


}

export function shortcuts(e) {
    //propiedades que podemos sacar de nuestros shortcuts
    // console.log(e.keyCode); 
    // console.log(e.type);

    //devuelve false y true si fue precionado 
    // console.log(e.altKey); 
    // console.log(e.ctrlKey); 
    // console.log(e.shiftKey); 
    // console.log(e); 

    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado una la alerta con el Teclado");
    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado una confirmación con el Teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una un aviso con el Teclado");
    }
}