import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CityWeatherHooks(props){

    const [ cityData,changeCityData ] = useState({})

    //we need to make an ajax/http request to the API
    //we dont have lifecycle methods... so we use useEffect
    //takes 2 args:
    //1: a callback that runs...
    //2: "when" to run 1
        // 1. undefined (no value) --> run EVERY render (componentDidMount + componentDidUpdate) 
        // 2. [] --> run on the first render ONLY (componentDidMount)
        // 3. [...data] --> run on the first render and anytime a 
        // var in the array changes (componentDidMount + modified componentDidUpdate) 
        // 4.(sort of) - if you return a function, that will run when the component unmounts
        // (componentWillUnmount)
    useEffect(()=>{
        const fetchWeather = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=imperial&appid=482c145ce8edf1d69ea5168f9d06460c`
            const resp = await axios.get(url);
            console.log(resp.data);
            changeCityData(resp.data);
            // return ()=>{console.log("Component is unmounting")}
        }
        fetchWeather();
    },[props.cityName]);

    useEffect(()=>{
        console.log("I only run once!")
    },[]);

    useEffect(()=>{
        console.log("city data changed!!")
    },[cityData]);

    if(!cityData.weather){
        return(<h1>Loading...</h1>)
    }
    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`

    return(
        <div className="container">
            <div className="city-name">{cityData.name}</div>
            <div className="temp">{cityData.main.temp} <img src={iconUrl} /></div>
        </div>
    )
}

export default CityWeatherHooks;