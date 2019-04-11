import React, {Component} from 'react';

class SimpleEvents extends Component{

    handleClick(){
        console.log("Test")
    }

    handleChange(){
        console.log("User changed the input!!")
    }

    handleSumbit(event){
        console.log("Form submitted!")
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <button onClick={this.handleClick} className="btn">Click Me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        )
    }
}

export default SimpleEvents;