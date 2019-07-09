export default (qChange,index)=>{
    console.log("Updating produce inventory!!!")
    return {
        type: 'updateProduce',
        payload: {
            qChange,
            index
        }
    }
}