// imparative = mutate state whenever we want to
// procedural = no association between data and methods/functions

const theDeck = [];
const playerHand = [];
const player2Hand = [];

function createDeck(){
    // make a deck of cards
    const suits = ['h','s','d','c'];
    for(let s = 0; s < 4; s++){
        for(let c = 1; c <= 13; c++){
            theDeck.push(c+suits[s]);
        }
    }
}

function shuffleDeck(){
    //shuffle the deck
    for(let i = 0; i < 10000; i++){
        let card1Index = Math.floor(Math.random() * theDeck.length);
        let card2Index = Math.floor(Math.random() * theDeck.length);
        const temp = theDeck[card1Index];
        theDeck[card1Index] = theDeck[card2Index];
        theDeck[card2Index] = temp;
    }
}

createDeck();
shuffleDeck();
// deal a card
console.log(theDeck.length);
playerHand.push(theDeck.shift());
player2Hand.push(theDeck.shift());
console.log(theDeck.length);
console.log(playerHand)