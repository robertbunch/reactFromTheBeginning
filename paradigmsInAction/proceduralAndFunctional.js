// Procedural = no association between data and methods
// Functional = pure functions with shared state

function createDeck(){
    const theDeck = [];
    const suits = ['h','s','d','c'];
    for(let s = 0; s < 4; s++){
        for(let c = 1; c <= 13; c++){
            theDeck.push(c+suits[s]);
        }
    }
    return theDeck;
}

function shuffleDeck(freshDeck){
    //shuffle the deck
    const deck = [...freshDeck]
    for(let i = 0; i < 10000; i++){
        let card1Index = Math.floor(Math.random() * deck.length);
        let card2Index = Math.floor(Math.random() * deck.length);
        const temp = deck[card1Index];
        deck[card1Index] = deck[card2Index];
        deck[card2Index] = temp;
    }
    return deck;
}

// we need some share state!
const theStore = ()=>{
    // this is where we keep our stuff! And nobody messes with it
    const state = {}; //rootReducer
    return {
        setState: (prop,value)=> state[prop] = value,
        getState: (prop)=> state[prop],
    }
}

function addCardToHand(hand, deck, index){
    const newHand = [...hand];
    const newDeck = [...deck];
    newHand.push(newDeck[index]);
    return newHand;
}

const store = theStore();

const theDeck = createDeck();
const shuffledDeck = shuffleDeck(theDeck);
store.setState('deck',shuffledDeck);
store.setState('playersHand',[])
store.setState('dealersHand',[]);
store.setState('placeInDeck',0);
const playerHandAfterDeal = addCardToHand(
    store.getState('playersHand'),
    store.getState('deck'),
    store.getState('placeInDeck'),
)
store.setState('playersHand',playerHandAfterDeal)
store.setState('placeInDeck',store.getState('placeInDeck')+1)