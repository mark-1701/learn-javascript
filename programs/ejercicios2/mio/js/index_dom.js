import audioControl from "./dom/audio_control.js";
import actionMenu from "./dom/menu.js";
import canvasControl from "./dom/canvas.js";
import keyboardShortcuts from "./dom/keyboard_shortcuts.js";
import countdown from "./dom/countdown.js";
import themeToggle from "./dom/theme_toggle.js";
import {responsiveMedia, responsiveMenu} from "./dom/responsive_design.js";
import responsiveTester from "./dom/responsive_tester.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import monitorConnection from "./dom/monitor_connection.js";
import webcamControl from "./dom/webcam_control.js";
import geolocationControl from "./dom/geolocation_control.js";
import searchFilter from "./dom/search_filter.js";
import raffle from "./dom/raffle.js";
import responsiveSlider from "./dom/responsive-slider.js";
import scrollSpy from "./dom/scroll_spy.js";
import videoControl from "./dom/video_control.js";
import formValidation from "./dom/form_validation.js";
import speechSynthesisControl from "./dom/speechSynthesis_control.js";

document.addEventListener("DOMContentLoaded", e => {
    actionMenu();

    audioControl("#play-btn", "#pause-btn", "#play-alarm-btn", "#pause-alarm-btn");

    canvasControl("#newCanvas");

    keyboardShortcuts();

    countdown("#countdownBtn", "#stop-countdown-btn", "#countdown-label");
    
    themeToggle("#theme-color-btn")

    //responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=i0kig6-gUwpEwj5k" target="_blank">Ver Vídeo</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=i0kig6-gUwpEwj5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    
    // responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/fHWsoMJ2wdPpnByx6" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4134564737774!2d-90.52575452597331!3d14.5755008776928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a34b9b77f4c7%3A0x1bc2068ddb9550bb!2sCiudad%20guatemala!5e0!3m2!1ses!2sgt!4v1701926883956!5m2!1ses!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("#responsive-tester-form"); 
    userDeviceInfo("user-device"); 
    monitorConnection(".connection-information"); 
    webcamControl(""); 
    geolocationControl("#latitude-label", "#longitude-label", "#precision-label"); 
    searchFilter("#search-image")
    raffle("#raffle-btn", "#languagueList");
    responsiveSlider(); 
    scrollSpy();
    responsiveMenu("(min-width: 700px)"); 
    videoControl(); 
    formValidation(); 
    speechSynthesisControl(); 
});




