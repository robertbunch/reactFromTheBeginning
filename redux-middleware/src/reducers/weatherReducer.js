export default (state = {},action)=>{
    if(action.type === "cityUpdate"){
        console.log(action.payload)
        return action.payload
    }else{
        return state;
    }
}
