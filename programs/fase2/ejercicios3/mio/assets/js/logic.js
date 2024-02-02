const $main = document.querySelector('main'); 

document.addEventListener('DOMContentLoaded', async e => {
    $main.innerHTML = await getHTML('pages/home.html'); 
});

document.addEventListener('click', async e => {
    if (e.target.matches('.link')) {
        e.preventDefault();
        const article = await getHTML(`pages/${e.target.dataset.page}.html`);
        console.log(`pages/home.html/${e.target.dataset.page}`); 
        $main.innerHTML = article; 
    }
});

const getHTML = async (link) => {
    try {
        let res = await axios.get(link),
            data = await res.data;
        // let parser = new DOMParser();
        // let article = parser.parseFromString(data, 'text/html').querySelector('article');
        return data;
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
    }
}