export default function formValidation() {
    const form = document.querySelector("#new-form"); 
    const alerts = document.querySelectorAll(".form-alert"); 

    document.addEventListener("submit", e => {
        if(e.target.matches("#new-form")) {
            e.preventDefault(); 
            const nombre = form.nombre.value.trim(); 
            const email = form.email.value.trim(); 
            const asunto = form.asunto.value.trim(); 
            const comentario = form.comentario.value.trim(); 
            if(!/^[a-zA-z\s\d]+$/i.test(nombre)){
                alerts[0].style.display = "block"; 
                return; 
            }
            if(!/^[a-zA-Z]+[_.][a-zA-Z]+@(gmail|outlook).(com|net|org)$/i.test(email)){
                alerts[1].style.display = "block"; 
                return; 
            }
            if(!/^.{1,12}$/i.test(asunto)){
                alerts[2].style.display = "block"; 
                return; 
            }
            if(!/^.{1,255}$/i.test(comentario)){
                alerts[3].style.display = "block"; 
                return; 
            }
            alert("Fórmulario enviado"); 
        }
    }); 
}