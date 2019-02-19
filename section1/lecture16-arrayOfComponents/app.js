let cards = data.map((course,i)=>{
    return(
        <Card key={i} data={course} />
    )
})
console.log(cards)

// ReactDOM.render here
ReactDOM.render(
    <div className="row">
        {cards}
    </div>,
    document.getElementById('root')
)