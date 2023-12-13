let msgDisplay = document.getElementById("message-el")
let cardDisplay = document.getElementById("cards-el")
let sumDisplay = document.getElementById("sum-el")
let sum = 0
let alive = false
let blackJack = false

let cards = []

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    } else if (random > 10) {
        return 10
    } else {
        return random
    }
}
function startGame() {
    alive = true
    let randomOne = getRandomCard()
    let randomTwo = getRandomCard()
    cards = [randomOne, randomTwo]
    sum = cards[0] + cards[1]

    renderGame()
}

function renderGame() {

    for (let i = 0; i < cards.length; i++) {
        cardDisplay.textContent += " " + cards[i]

    }
    sumDisplay.textContent += sum
    let message = ""
    if (sum < 21) {
        message = "You want another card?"
        alive = true
        blackJack = false
    } else if (sum === 21) {
        message = "Winner bc"
        blackJack = true
        alive = false
    } else {
        message = "Dafa Hoja Loru"
        blackJack = false
        alive = false
    }
    msgDisplay.textContent = message
}

function newCard() {

    if (alive === true && blackJack === false) {
        let randomThree = getRandomCard()
        sum += randomThree
        cards.push(randomThree)
        renderGame()


    }
}