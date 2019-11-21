import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from './actions/fetchWeather';
import testThunk from './actions/testThunk';

class Weather extends React.Component{
    state = {city: "London"}
    changeCity = (e)=>{this.setState({city:e.target.value})}


    componentDidMount(){
        this.props.testThunk();
    }

    render(){
        console.log(this.props.weather)
        const weather = this.props.weather
        if(!weather.main){
            return(
                <div>
                    <input type="text" onChange={this.changeCity} value={this.state.city} />
                    <button onClick={()=>{this.props.fetchWeather(this.state.city)}}>Fetch Weather!</button>
                </div>
            )
        }
        return(
            <h3>It's currently {weather.main.temp}</h3>
        )
    }
}

function mapStateToProps(state){
    return{
        weather: state.weather
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWeather: fetchWeather,
        testThunk
    },dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Weather);
