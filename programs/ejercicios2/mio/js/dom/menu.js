export default function actionMenu() {
    //ELEMENTOS
    const $hamburgerButton = document.querySelector(".hamburger");
    const $sliderbar = document.querySelector("#sidebar");

    const $buttonUp = document.querySelector("#button-up");
    let $windowsScrollY = window.scrollY;

    //MANEJADOR DEL SCROLL
    const handleScroll = () => {
        $windowsScrollY = window.scrollY;
        if ($windowsScrollY == 0) {
            $buttonUp.style.display = "none"
        } else {
            $buttonUp.style.display = "block"
        }
    }

    const changeSidebarState = () => {
        $hamburgerButton.classList.toggle("is-active");
        if ($hamburgerButton.classList.contains("is-active")) {
            $sliderbar.style.left = "0"
            $buttonUp.style.display = "none"
        } else {
            $sliderbar.style.left = "-100vw";
            $buttonUp.style.display = "block"
        }
    }

    document.addEventListener("click", e => {
        console.log("Click en: ", e.target);

        if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
            changeSidebarState();
        }

        if (e.target.matches(".sidebar-link")) {
            //BUSCA EN EL LOCALSTORAGE QUE VERSIÓN HAY ACTUALEMENTE EN LA PÁGINA
            //Esta función solo esta disponible en Mobile
            if (localStorage.getItem("pageVersion") === "mobile") {
                changeSidebarState();
            }
        }

        if (e.target.matches("#button-up")) {
            // Desplazarse al principio de la página
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth' // Opcional: hace el desplazamiento suave
            });

        }
    });

    window.addEventListener("scroll", handleScroll);
}