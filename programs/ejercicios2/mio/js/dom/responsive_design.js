
export function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = window.matchMedia(mq);

    const responsive = e => {
        if (e.matches) {
            document.getElementById(id).innerHTML = desktopContent;
        } else {
            document.getElementById(id).innerHTML = mobileContent;
        }
        console.log(e.matches);
    }

    breakpoint.addListener(responsive);
    //se le pasa el breakpoint y valida la entrada como el evento
    responsive(breakpoint);
}

export function responsiveMenu(mq) {
    var stylesheet = document.getElementById('menu-styles');
    let breakpoint = window.matchMedia(mq);
    const $hamburgerButton = document.querySelector(".hamburger");
    const $sliderbar = document.querySelector("#sidebar");

    const responsive = e => {
        $hamburgerButton.classList.remove("is-active");
        if (e.matches) {
            $sliderbar.style.left = "initial"; 
            stylesheet.href = "css/aside-menu.css";
            savePageVersion("desktop"); 
        } else {
            $sliderbar.style.left = "-100vw"; 
            stylesheet.href = "css/hamburger-menu.css";
            savePageVersion("mobile"); 
        }
        console.log(e.matches);
    }

    breakpoint.addListener(responsive);
    //se le pasa el breakpoint y valida la entrada como el evento
    responsive(breakpoint);
}

// GUARDAR QUE VERSIÓN ESTA ACTUALMENTE EN LA PÁGINA
function savePageVersion(text) {
    localStorage.setItem("pageVersion", text);
}