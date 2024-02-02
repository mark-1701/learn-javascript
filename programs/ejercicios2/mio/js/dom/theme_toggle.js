export default function themeToggle(themeColorBtn) {
    const $themeColorBtn = document.querySelector(themeColorBtn);
    const $themeColorSpan = $themeColorBtn.querySelector('span');

    //HOJA DE ESTILO OSCURA
    const darkModeLink = document.createElement("link");
    darkModeLink.rel = "stylesheet";
    darkModeLink.href = "css/dark-mode.css";

    //CÓDIGO SE CARGA AL PRINCIPIO PARA CARGAR LA HOJA DE ESTILO OSCURA
    let savedThemeColor = localStorage.getItem("themeColor");
    if (savedThemeColor === "dark") {
        console.warn(savedThemeColor);
        document.head.appendChild(darkModeLink);
        themeColorBtnAnimation("light_mode");
    }


    document.addEventListener("click", e => {
        if (e.target.matches(themeColorBtn) || e.target.matches(`${themeColorBtn} *`)) {

            const darkModeLinkToRemove = document.querySelector('link[href="css/dark-mode.css"]');
            savedThemeColor = localStorage.getItem("themeColor");

            if (savedThemeColor === "dark") {
                document.head.removeChild(darkModeLinkToRemove);
                //SE CAMBIA EL ICONO A LA DEL LA LUNA
                themeColorBtnAnimation("dark_mode");
                saveThemeColor("light");
            } else {
                document.head.appendChild(darkModeLink);
                //SE CAMBIA EL ICONO A LA DEL SOL
                themeColorBtnAnimation("light_mode");
                saveThemeColor("dark");
            }

            console.warn(savedThemeColor);
        }
    });

    //FUNCIÓN CAMBIA EL CONTENIDO SPAN Y LA ANIMACIÓN
    function themeColorBtnAnimation(spanContent) {
        $themeColorBtn.style.opacity = 0;
        setTimeout(() => {
            $themeColorBtn.style.opacity = 1;
            $themeColorSpan.innerHTML = spanContent;
        }, 100);
    }

    function saveThemeColor(colorTheme) {
        localStorage.setItem("themeColor", colorTheme);
    }
}