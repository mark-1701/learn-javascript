export default function searchFilter(imageSearchInput) {
    const $imageSearchInput = document.querySelector(imageSearchInput);
    // const $section = document.querySelector("#seccion9");
    const $cards = document.querySelector(".cards");

    const json =
        [
            {
                id: 1,
                name: "Tech"
            },
            {
                id: 237,
                name: "Animals"
            },
            {
                id: 65,
                name: "People"
            },
            {
                id: 101,
                name: "Arch"
            },
            {
                id: 10,
                name: "Natural"
            }
        ];

    function loadImages(figures) {
        figures.forEach(element => {
            let $figure = document.createElement("figure");
            let $img = document.createElement("img");
            let $figcation = document.createElement("figcaption");
            let $figcationText = document.createTextNode(element.name);

            $figure.classList.add("card");
            $img.src = `https://picsum.photos/id/${element.id}/200/200`;

            $figcation.appendChild($figcationText);
            $figure.appendChild($img);
            $figure.appendChild($figcation);
            $cards.appendChild($figure);
        });
    }


    $imageSearchInput.addEventListener("input", e => {
        $cards.innerHTML = ""; 

        let inputValue = $imageSearchInput.value.trim(); 
        // let regexExpression = new RegExp(`.*${inputValue}.*`, "gi");
        let regexExpression = new RegExp(`\\b${inputValue}.*`, "gi");


        let newFigures = json.filter(figure => regexExpression.test(figure.name));
        loadImages(newFigures); 
    });

    loadImages(json);

}