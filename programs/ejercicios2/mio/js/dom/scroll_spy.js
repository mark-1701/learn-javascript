export default function scrollSpy() {
    const observedElements = document.querySelectorAll('.section');
    const links = document.querySelectorAll(".sidebar-link");
    let especificLink;

    const handleIntersect = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //Selecciona el link especifico
                especificLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                changelinkMark(); 
            }
        });
    };

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.50, 0.70],
    };
    let observer = new IntersectionObserver(handleIntersect, options);
    observedElements.forEach(element => {
        observer.observe(element);
    });
    function changelinkMark() {
        links.forEach(element => element.classList.remove("mark-link"));
        if (especificLink) especificLink.classList.add("mark-link");
    }
}


// console.log(entry.boundingClientRect)
// console.log(entry.intersectionRatio)
// console.log(entry.intersectionRect)
// console.log(entry.rootBounds)
// console.log(entry.target)
// console.log(entry.time)
// console.log(entry.)