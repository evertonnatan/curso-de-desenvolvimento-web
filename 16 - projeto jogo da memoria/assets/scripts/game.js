let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id) [0]

        if(card.flipped || this.lockMode) {
            return false
        }

        if(!this.firstCard) {
            this.firstCard = card
            return true
        } else {
            this.secondCard = card
            this.lockMode = true
            return true
        }
    },

    checkMatch: function() {
        return this.firstCard.icon === this.secondCard.icon
    },

    clearCards: function() {
        this.firstCard = null
        this.secondCard = null
        this.lockMode = false
    },


    members: [
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