// imparative = mutate state whenever we want to
// oop = data and methods are encapsulated

class Deck{
    constructor(){
        this.deck = [];
    }
    createDeck(){
        const suits = ['h','s','d','c'];
        for(let s = 0; s < 4; s++){
            for(let c = 1; c <= 13; c++){
                this.deck.push(c+suits[s]);
            }
        }
    }
    shuffleDeck(){
        for(let i = 0; i < 10000; i++){
            let card1Index = Math.floor(Math.random() * this.deck.length);
            let card2Index = Math.floor(Math.random() * this.deck.length);
            const temp = this.deck[card1Index];
            this.deck[card1Index] = this.deck[card2Index];
            this.deck[card2Index] = temp;
        }
    }
    dealCard(){
        return this.deck.shift();
    }
}

const theDeck = new Deck();
theDeck.createDeck();
theDeck.shuffleDeck();
console.log(theDeck.deck);
console.log(theDeck.dealCard());
