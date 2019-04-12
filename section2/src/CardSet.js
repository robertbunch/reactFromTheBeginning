import React, {Component} from 'react';

class CardSet extends Component{
    constructor(){
        super();
        this.state = {
            chosenCards: []
        }
    }
    render(){
        console.log(this.props.cards)
        return(
                        
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={this.props.data.image} />
                    </div>
                    <div className="card-content">
                        <p>{this.props.data.course}</p>
                        <p>{this.props.data.instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">$9.99</a>
                    </div>
                </div>
            </div>	
        )
    }
}

export default CardSet;