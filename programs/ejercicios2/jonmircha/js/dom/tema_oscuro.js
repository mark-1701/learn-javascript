const ls = localStorage; 

export default function darkTheme(btn, classDark) {
    //También podemos seleccionar según el atributo html
    const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll("[data-dark]"); 

    let moon = "🌙",
    sun ="☀️"; 

    const lightMode = () => {
        $selectors.forEach(element => element.classList.remove(classDark)); 
        $themeBtn.textContent = moon; 
        ls.setItem("theme", "light"); 
    }
    const darkMode = () => {
        $selectors.forEach(element => element.classList.add(classDark)); 
        $themeBtn.textContent = sun; 
        ls.setItem("theme", "dark"); 
    }
 
    document.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent); 
            if($themeBtn.textContent === moon) {
                darkMode(); 
            } else {
                lightMode(); 
            }
        }
    }); 

    document.addEventListener("DOMContentLoaded", e => {
        console.warn(ls.getItem("theme"));
        if (ls.getItem("theme") === null) ls.setItem("theme", "light"); 
        if (ls.getItem("theme") === "light") lightMode(); 
        if (ls.getItem("theme") === "dark") darkMode(); 
    }); 
}