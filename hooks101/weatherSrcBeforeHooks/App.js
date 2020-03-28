import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
	const [counter,setCounter] = useState(0)

	// [0] or counter = the this.state
	// [1] or setCounter = this.setState(thing [0])
	// 0 we pass to useState = the initial value of our state
	// Hooks do not use an object to store state
	// THIS IS FROSTING! React state works the same as it does with classes
	
	return(
		<div>
			<div>Counter: {counter}</div>
			<div><button onClick={()=>{setCounter(counter+1)}}>Add 1!</button></div>
		</div>
	)
}


// class App extends React.Component{
	// state = {counter: 0}

// 	updateCounter = ()=>{
// 		this.setState({counter: this.state.counter+1})
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<div>Counter: {this.state.counter}</div>
// 				<div><button onClick={this.updateCounter}>Add 1!</button></div>
// 			</div>
// 			)
// 	}
// }

export default App;
