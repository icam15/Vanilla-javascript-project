const randomQuoteApi = "http://api.quotable.io/random"
const quoteDisplayElement = document.getElementById('quote-display')
const quoteInputElement = document.getElementById("quote-Input")
const timerElement = document.getElementById("timer")

quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split("");

    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if(character == null) {
            characterSpan.classList.remove("correct")
            characterSpan.classList.remove("incorrect")
            correct = false
        }
        else if(character === characterSpan.innerText) {
            characterSpan.classList.add("correct")
            characterSpan.classList.remove("incorrect")
        } else {
            characterSpan.classList.remove("correct")
            characterSpan.classList.add("incorrect")
            correct = false
        }
    });

    if(correct) {
        renderNewQoute()
    }

});

async function  getRandomQuote () {
    const response = await fetch(randomQuoteApi)
    const data = await response.json()
    return data
}

async function renderNewQoute () {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = ""
    quote.content.split("").forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer();
}

// function startTimer () {
//     timerElement.innerText = 0
//     setInterval(() => {
//             timerElement.innerText ++
//     }, 1000)
// }

let startTime
function startTimer () {
    timerElement.innerText = 0
    startTime = new Date();
    setInterval(() => {
        timerElement.innerText = getTimerTime()
    }, 1000);
}

function getTimerTime() {
   return Math.floor((new Date() - startTime) / 1000) 
}

renderNewQoute()

