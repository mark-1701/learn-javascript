export default function videoControl() {
    const video = document.querySelector("#video");
    video.muted = true;
    const handleIntersect = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    };

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.50, 0.75],
    };
    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(video);

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
            observer.observe(video);
        } else {
            observer.unobserve(video);
            video.pause();
        }
    });
}