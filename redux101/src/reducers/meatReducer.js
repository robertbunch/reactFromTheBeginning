// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
    {
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "bacon",
        quantity: 11
    },
    {
        food: "mahi mahi",
        quantity: 35
    },
    {
        food: "salmon",
        quantity: 135        
    }
]

export default (state = seedData, action)=>{
    console.log("Meat Reducer is running!");
    console.log(action);
    if(action.type === 'updateMeat'){
        const newState = [...state];
        const payload = action.payload;
        newState[payload.index].quantity += payload.qChanage;
        return newState;
    }else if(action.type === 'clearInventory'){
        return [];        
    }else{
        return state;
    }
}
