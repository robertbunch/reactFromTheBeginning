export default (state = {},action)=>{
    console.log(action.type);
    if(action.type === "cityUpdate"){
        console.log(action.payload)
        return action.payload
    }else{
        return state;
    }
}
