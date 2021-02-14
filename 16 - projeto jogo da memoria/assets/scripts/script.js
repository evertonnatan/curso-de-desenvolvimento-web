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

createCardsFromMembers(members)

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
