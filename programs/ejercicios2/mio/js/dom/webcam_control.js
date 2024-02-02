export default function webcamControl() {
    let video; 
    // var constraints = { audio: false, video: { width: 1280, height: 720 } };
    var constraints = { audio: false, video: true };
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            video = document.querySelector("video");
            // video.src = window.URL.createObjectURL(stream);+
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    
    document.addEventListener("click", e => {
        if (e.target.matches("#pause-video") || e.target.matches("#pause-video *")) {
            video.pause(); 
        }
        if (e.target.matches("#play-video") || e.target.matches("#play-video *")) {
            video.play(); 
        }
    }); 
}