const FRONT = "card_front"
const BACK = "card_back"

let members = [
    'itachi',
    'deidara',
    'hidan',
    'kakuzu',
    'kisame',
    'konan',
    'pain',
    'sasori',
    'tobi',
    'zetsu'
]

let cards = null

startGame()

function startGame() {
    cards = createCardsFromMembers(members)
    shuffleCards(cards)

    initializeCards(cards)
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard")
}

function shuffleCards(cards) {
    let currentIndex = cards.length
    let randomIndex = 0

    while(currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}


function createCardsFromMembers(members) {
    let cards = []

    for(let member of members) {
        cards.push(createPairFromMember(member))
    }

    return cards.flatMap(pair => pair)
}

function createPairFromMember(member) {

    return [{
        id: createIdWithMember(member),
        icon: member,
        flipped: false,
    }, {
        id: createIdWithMember(member),
        icon: member,
        flipped: false,
    }]
}

function createIdWithMember(member) {
    return member + parseInt(Math.random() * 1000)
}
