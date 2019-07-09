export default (qChanage, index)=>{
    return {
        type: 'updateMeat',
        payload: {
            qChanage,
            index
        }
    }
}