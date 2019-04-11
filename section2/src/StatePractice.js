import React, {Component} from 'react';

class StatePractice extends Component{
    constructor(){
        super();
        this.state = {
            message: ""
        }
    }

    handleEnter = (event)=>{
        this.setState({
            message: "",
            imageWidth: ""
        })
    }

    handleFocus = (event)=>{
        this.setState({
            message: "You agree to our terms of service by filling out the form"
        })
    }

    imageLoad = (event)=>{
        console.dir(event.target)
        if(event.target.width > 100){
            console.log("Your image is large!")
        }
    }

    render(){
        return(
            <div>
                <input onFocus={this.handleFocus} type="text" />
                <h3 onMouseEnter={this.handleEnter}>{this.state.message}</h3>
                <img onLoad={this.imageLoad} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            </div>
        )
    }

}

export default StatePractice;