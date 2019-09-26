import React from 'react';
import { connect } from 'react-redux';

class WarmOrNot extends React.Component{
    render(){
        const weather = this.props.weather
        //There is no weather object
        if(!weather.main){
            return(
                <h3>Fetch the weather to find out if it's warm!</h3>
            )
        }

        //There is a weather object!
        if(weather.main.temp > 70){
            return(
                <h3>It's warm!</h3>
            )
        }else{
            return(
                <h3>It's cold :(</h3>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WarmOrNot);
