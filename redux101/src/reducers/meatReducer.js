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
    return state;
}


// function frozen(state = [],action){
//     return state;
// }
// export default frozen;