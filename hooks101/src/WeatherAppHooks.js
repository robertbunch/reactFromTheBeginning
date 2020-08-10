import React, { useState } from 'react';
import './App.css';
import CityWeatherHooks from './CityWeatherHooks';

function WeatherApp(props){
    const [ city, changeCity ] = useState("London");
    const [ cityNameForWeather, changeCityNameForWeather ] = useState("London");

    const citysearch = (e)=>{
        e.preventDefault();
        changeCityNameForWeather(city)
    }

    return(
        <div className="container">
            <CityWeatherHooks cityName={cityNameForWeather} />
            <div className="row justify-content-center">
                <form onSubmit={citysearch}>
                    <input type="text" value={city} onChange={(e)=>changeCity(e.target.value)} />
                    <input type="submit" className="btn btn-primary" value="Search!" />
                </form>
            </div>
        </div>
    )
}

export default WeatherApp;
