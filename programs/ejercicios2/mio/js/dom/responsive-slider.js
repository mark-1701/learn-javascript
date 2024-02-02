export default function responsiveSlider() {
    const $forwardBtn = document.querySelector("#forward");
    const $backwardBtn = document.querySelector("#backward");
    const $imageContainers = document.querySelectorAll(".image-container");
    let percentage = 0;


    // const $responsiveSlider = document.querySelector("#responsive-slider");
    // let arr = [1, 2, 3, 4, 5];
    // let index = 1;
    // let primerelemento = arr[0];
    // let ultimoelemento = arr[arr.length - 1];
    // // $responsiveSlider.removeChild($responsiveSlider.lastChild); 


    $forwardBtn.addEventListener("click", e => {
        if (percentage !== -400) {
            percentage -= 100;
            $imageContainers.forEach(img => {
                img.style.transform = `translate(${percentage}%, 0)`;
            });
        }
    });
    $backwardBtn.addEventListener("click", e => {
        if (percentage !== 0) {
            percentage += 100;
            $imageContainers.forEach(img => {
                img.style.transform = `translate(${percentage}%, 0)`;
            });
        }

    });

}
