export default function raffle(raffleBtn, languagueList) {
    const $raffleBtn = document.querySelector(raffleBtn); 
    const $languagueList = document.querySelector(languagueList); 
    const $languagues = $languagueList.querySelectorAll('li');


    document.addEventListener("click", e => {
        if (e.target === $raffleBtn) {
            // $languagues.forEach(element => {
            //     console.warn(element)
            // });
            let max = $languagues.length; 
            let randomNumber = Math.floor(Math.random() * (max - 0 + 1));
            alert(`El lenguaje ganador es: ${$languagues[randomNumber].textContent}`)
        }
    }); 
}