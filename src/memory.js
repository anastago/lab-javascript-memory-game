class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }

    for (let index = this.cards.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random() * (index + 1))
      ;[this.cards[index], this.cards[j]] = [this.cards[j], this.cards[index]]
    }
  }

  checkIfPair(card1, card2) {
    this.card1 = card1
    this.card2 = card2
    this.pairsClicked = this.pairsClicked + 1
    if (this.card1 === this.card2) {
      this.pairsGuessed = this.pairsGuessed + 1
      return true
    } else {
      return false
    }
    
  }

  checkIfFinished() {
    let numberOfPairs = this.cards.length / 2
    if (this.pairsGuessed === numberOfPairs) {
      return true
    } else {
      return false
    }
  }
}
