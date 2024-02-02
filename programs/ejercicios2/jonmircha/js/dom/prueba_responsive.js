export default function responsiveTester(form) {
    const $form = document.getElementById(form); 
    let tester; 

    document.addEventListener("submit", e => {
        //e.target.matches es otra forma de hacerlo
        if (e.target === $form) {
            e.preventDefault(); 

            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`); 

            alert("formulario enviando"); 
        }
    }); 

    document.addEventListener("click", e => {
        if (e.target === $form.cerrar) tester.close(); 
        
    }); 
}