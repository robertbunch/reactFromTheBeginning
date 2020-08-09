import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CityWeatherHooks(props){

    const [ cityData,changeCityData ] = useState({})

    //we need to make an ajax/http request to the API
    //we dont have lifecycle methods... so we use useEffect
    //takes 2 args:
    //1: a callback that runs...
    //2: "when" to run 1
    useEffect(async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
        const resp = await axios.get(url);
        console.log(resp.data);
    })

    return(<h1>CityWeatherHooks</h1>)
}

export default CityWeatherHooks;