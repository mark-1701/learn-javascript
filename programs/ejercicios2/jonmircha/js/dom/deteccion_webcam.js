export default function webCam(id) {
    const $video = document.getElementById(id); 
    // console.log(navigator.mediaDevices.getUserMedia)

    //validamos si existe la función
    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((strem) => {
            console.log(strem); 
            $video.srcObject = strem; 
            $video.play(); 
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`)
            console.error(`¡Sucedió el siguiente error: ${err}`);
        }); 
    }
}