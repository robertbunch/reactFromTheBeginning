import React from 'react';
import CityWeatherHooks from './CityWeatherHooks';

function WeatherAppHooks(props){
    return(
        <div className="container">
            <CityWeatherHooks cityName={} />
            <div className="row justify-content-center">
                <form onSubmit={}>
                    <input type="text" value={} onChange={} />
                    <input type="submit" className="btn btn-primary" value="Search!" />
                </form>
            </div>
        </div>
    )
}

export default WeatherAppHooks;