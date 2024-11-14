const randomEl = document.querySelector(".randomizer");
const btnEl = document.querySelector(".btn");


const telNumbers = [
    "+998 93 519 64 71",
    "+998 94 418 51 72",
    "+998 33 117 44 73",
    "+998 88 216 78 74",
    "+998 98 315 11 75",
    "+998 97 614 22 76",
    "+998 88 713 33 77",
    "+998 33 812 95 78",
    "+998 95 911 47 79",
    "+998 92 110 55 80",
    "+998 91 203 42 81",
    "+998 90 302 38 82",
    "+998 97 401 96 83",
    "+998 90 604 10 84",
    "+998 91 705 00 85",
    "+998 98 806 78 86",
    "+998 94 907 99 87",
    "+998 33 108 12 88",
    "+998 97 209 03 89",
    "+998 93 300 14 90",
    "+998 88 799 21 91",
]

function randomizer() {
    btnEl.setAttribute("disabled", "true");
    const interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * telNumbers.length);
        randomEl.innerHTML = telNumbers[randomIndex];
    
    })

   
    setTimeout(() => {
        clearInterval(interval);
        btnEl.removeAttribute("disabled");
    
    }, 1500);

    
}

console.log("Чё делаем?");

    
