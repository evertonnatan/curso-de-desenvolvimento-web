let game = {
    members = [
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
    ],
    
    cards: null,

    createCardsFromMembers: function () {
        this.cards = []
    
        this.members.forEach((member) => {
            this.cards.push(this.createPairFromMember(member))
        })    
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
        return this.cards
    },
    
    createPairFromMember: function (member) {
    
        return [{
            id: this.createIdWithMember(member),
            icon: member,
            flipped: false,
        }, {
            id: this.createIdWithMember(member),
            icon: member,
            flipped: false,
        }]
    },
    
    createIdWithMember: function (member) {
        return member + parseInt(Math.random() * 1000)
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0
    
        while(currentIndex !== 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}