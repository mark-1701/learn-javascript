export default function monitorConnection(connectionContainer) {
    const $connectionContainer = document.querySelector(connectionContainer);

    function translateAlert() {
        $connectionContainer.style.transform = "translate(0, 0)";
        setInterval(() => {
            $connectionContainer.style.transform = "translate(0, -100%)";
        }, 2000);
    }

    function lostConnectionAlert() {
        $connectionContainer.style.backgroundColor = "red";
        $connectionContainer.style.color = "#000";
        $connectionContainer.textContent = "Se ha perdido la conexión a internet";
        translateAlert();
    }

    function connectedAlert() {
        $connectionContainer.style.backgroundColor = "green";
        $connectionContainer.style.color = "#fff";
        $connectionContainer.textContent = "La conexión a internet ha sido restablecida";
        translateAlert();
    }

    window.addEventListener('offline', function () {
        lostConnectionAlert();
    });

    window.addEventListener('online', function () {
        connectedAlert();
    });
}