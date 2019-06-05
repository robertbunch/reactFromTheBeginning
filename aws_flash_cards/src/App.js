import React, { Component } from 'react';
import './App.css';
import QuizBar from './components/QuizBar';
import FlashCard from './components/FlashCard'

class App extends Component{
	constructor(){
		super();
		this.state = {
      cardStyle: "Random",
      ready: false,
		}
  }

  userChoice = (cardStyle)=>{
    this.setState({
      cardStyle,
      ready: false
    })
  }

  nowReady = ()=>{
    this.setState({
      ready: true
    })
  }

  render(){
    console.log(this.state.cardStyle);
    return (
      <div className="App align-items-center d-flex">
        <div className="container">
          <QuizBar userChoice={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready}  />
        </div>
      </div>
    );
  }
}

export default App;
