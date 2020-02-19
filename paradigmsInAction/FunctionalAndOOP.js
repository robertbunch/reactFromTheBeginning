// OOP = data and methods are encapsulated in an object
// Functional = pure functions with shared state
class Deck{
    createDeck(){
        const theDeck = [];
        const suits = ['h','s','d','c'];
        for(let s = 0; s < 4; s++){
            for(let c = 1; c <= 13; c++){
                theDeck.push(c+suits[s]);
            }
        }
        return theDeck;
    }

    shuffleDeck(emptyDeck){
        //shuffle the deck
        const deck = [...emptyDeck]; //WE DONT MUTATE the var passed
        for(let i = 0; i < 10000; i++){
            let card1Index = Math.floor(Math.random() * deck.length);
            let card2Index = Math.floor(Math.random() * deck.length);
            const temp = deck[card1Index];
            deck[card1Index] = deck[card2Index];
            deck[card2Index] = temp;
        }
        return deck;
    }

    // the simple truth ... we need state
    theStore(){
        const state = {}; //REDUX!!!
        return {
            setState: (prop,value)=>state[prop] = value,
            getState: (prop)=>state[prop],
        }
    }

    addCardToHand(hand,deck,index){
        const newHand = [...hand];
        const newDeck = [...deck];
        const newCard = newDeck[index];
        newHand.push(newCard);
        return newHand;
    }
}

const theDeck = createDeck();
const shuffledDeck = shuffleDeck(theDeck);
const cardState = theStore();
cardState.setState('playerHand',[]);
const playersCurentHand = cardState.getState('playerHand');
console.log(playersCurentHand);
const playersHandAfteCardDealt = addCardToHand(playersCurentHand,theDeck,0);
console.log(playersHandAfteCardDealt);

theDeck.setState('locationInDeck',0);
theDeck.setState('locationInDeck',theDeck.getState('locationInDeck')+1);

