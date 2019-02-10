class Card extends React.Component{
    
render(){
    // console.log(props.data)
    console.log(this.props.data)
    return(
        <div class="col s2">
            <div class="card hoverable small">
                <div class="card-image">
                    <img src="http://lorempixel.com/400/400/nature/1" />
                </div>
                <div class="card-content">
                        <p>{this.props.data.course}</p>
                        <p>{this.props.data.instructor}</p>
                </div>
                <div class="card-action">
                    <a href="#">$9.99</a>
                </div>
            </div>
        </div>
    )
    }
}