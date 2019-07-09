// All reducers have 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
    {
        food: "lettuce",
        quantity: 14
    },
    {
        food: "turnips",
        quantity: 11
    },
    {
        food: "apples",
        quantity: 35
    },
    {
        food: "cilantro",
        quantity: 135        
    }
]

export default (state = seedData, action)=>{
    console.log("Producer Reducer is running!");
    if(action.type === 'updateProduce'){
        const payload = action.payload;
        const newState = [...state];
        newState[payload.index].quantity += payload.qChange;
        return newState;
    }else{
        return state;
    }
    
}

