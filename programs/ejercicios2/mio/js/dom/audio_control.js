export default function audioControl(playBtn, pauseBtn, playAlarmBtn, pauseAlarmBtn) {
    const $time = document.querySelector("#time");
    let audio = new Audio('audio/despertador.m4a');
    let interval;

    document.addEventListener("click", e => {
        if (e.target.matches(playBtn) || e.target.matches(`${playBtn} *`)) {
            interval = setInterval(function () {
                $time.textContent = new Date().toLocaleTimeString();
            }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(pauseBtn) || e.target.matches(`${pauseBtn} *`)) {
            clearInterval(interval);
            $time.textContent = "";
            document.querySelector(playBtn).disabled = false;
        }

        if (e.target.matches(playAlarmBtn) || e.target.matches(`${playAlarmBtn} *`)) {
            audio.play();
            e.target.disabled = true;
        }

        if (e.target.matches(pauseAlarmBtn) || e.target.matches(`${pauseAlarmBtn} *`)) {
            audio.pause();
            document.querySelector(playAlarmBtn).disabled = false;
        }
    }); 
}