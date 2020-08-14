import React, { useState, useEffect } from 'react';
import './CityVenues.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';

function CityVenues(props){

    const [ venues, setVenues ] = useState([])
    const [ header, setHeader ] = useState("")

    useEffect(()=>{
        const getVenues = async()=>{
            const cityName = props.match.params.cityName;
            const url = `${window.apiHost}/venues/city/${cityName}`;
            const resp = await axios.get(url,{cityName})
            setVenues(resp.data.venues);
            setHeader(resp.data.header);
        };
        getVenues();
    },[])


    if(!header){
        return <Spinner />
    }
    return(
        <div className="row">
            <Venues venues={venues} header={header} />
        </div>
    )
}
export default CityVenues;