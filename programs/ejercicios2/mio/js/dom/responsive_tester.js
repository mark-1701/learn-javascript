export default function responsiveTester(responsiveTesterForm) {
    const $responsiveTesterForm = document.querySelector(responsiveTesterForm);
    let newWindow;

    // console.info(window); 

    $responsiveTesterForm.addEventListener("submit", e => {
        e.preventDefault();

        const windowLink = document.getElementById("window-link").value.trim();
        const windowWith = document.getElementById("window-with").value.trim();
        const windowHeight = document.getElementById("window-height").value.trim();

        if (windowLink === "" || windowWith === "" || windowHeight === "") {
            return alert("Debes de llenar todos los campos");
        }

        let windowFeatures = `left=100,top=100,width=${windowWith},height=${windowHeight}"`; 
        newWindow = window.open(
            windowLink,
            "mozillaWindow",
            windowFeatures,
        );
    });
}