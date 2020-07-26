export default (openClose,content)=>{
    return{
        type: "OPEN_MODAL",
        payload: {
            openClose,
            content,
        }
    }
}