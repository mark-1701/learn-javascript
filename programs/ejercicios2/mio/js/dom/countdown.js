export default function countdown(countdownBtn, stopCountdownBtn, countdownLabel) {
    const $countdownLabel = document.querySelector(countdownLabel);
    let calculation;
    let newDate;
    let interval; 

    document.addEventListener("click", e => {
        if (e.target.matches(countdownBtn)) {
            let date = prompt("Por favor, ingresa una fecha:");
            let expReg = /^\d{2}\/\d{2}\/\d{4}$/.test(date);
            if (!expReg) return alert("La fecha introducida no escorrecta.");

            date = date.split("/").reverse();
            date[1] -= 1;
            date = new Date(...date);

            if (date.getTime() <= Date.now()) return alert("la fecha introducida no es correcta: Es menor o igual a la fecha actual.");

            interval = setInterval(() => {
                calculation = date.getTime() - Date.now();
                const remainingDays = Math.floor(calculation / (1000 * 60 * 60 * 24)); 
                const remainingHours = Math.floor(calculation / (1000 * 60 * 60));
                const remainingMinutes = Math.floor(calculation / (1000 * 60)); 
                const remainingSeconds = Math.floor(calculation / 1000); 

                $countdownLabel.innerHTML = `faltan ${remainingDays} días ${remainingHours} horas ${remainingMinutes} minutos ${remainingSeconds} segundos.`; 
                
            }, 1000);        
        }
        
        if (e.target.matches(stopCountdownBtn)) { 
            clearInterval(interval); 
            $countdownLabel.innerHTML = null;
        }
    });
}

