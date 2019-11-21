export default()=>{
    return (dispatch, getState)=>{
        setTimeout(()=>{
            console.log("I waited for 2 seconds")
            dispatch({
                type: "testThunk"
            })
        },2000)
    }
}