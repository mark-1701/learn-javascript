import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/despertador.m4a", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Dec 05, 2023 16:19:08", "Feliz Cumpleaños amigo y docente digital. 🤓");
    scrollTopButton(".scroll-top-btn");
    // responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=i0kig6-gUwpEwj5k" target="_blank">Ver Vídeo</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=i0kig6-gUwpEwj5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    // responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/fHWsoMJ2wdPpnByx6" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4134564737774!2d-90.52575452597331!3d14.5755008776928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a34b9b77f4c7%3A0x1bc2068ddb9550bb!2sCiudad%20guatemala!5e0!3m2!1ses!2sgt!4v1701926883956!5m2!1ses!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester"); 
    userDeviceInfo("user-device"); 
    webCam("webcam"); 
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");  
    draw("#winner-btn", ".player"); 
    slider(); 
    scrollSpy(); 
    smartVideo(); 
    contactFormValidations(); 
});



d.addEventListener("keydown", e => {
    //- keydown es cuando la tecla es precionada
    //- keyup es cuando soltamos la tecla
    //- keypress mientras la tecla esta precionada
    shortcuts(e);
    moveBall(e, ".ball", ".stage");

})

//se saca la función para poder usar el DOMContentLoaded que viene dentro
darkTheme(".dark-theme-btn", "dark-mode"); 

networkStatus(); 

speechReader(); 
