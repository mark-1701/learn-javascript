const d = document,
w = window; 

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn); 

    
    w.addEventListener("scroll", e => {
        //Métodos para saber cuanto se despega de la ventana
        //console.log(w.pageYOffset, d.documentElement.scrollTop); 

        //guarda alguno de los dos
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop; 

        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden"); 
        } else {
            $scrollBtn.classList.add("hidden"); 
        }

    }); 

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo ({
                behavior: "smooth",
                top: 0
            }); 
        }
    }); 
}