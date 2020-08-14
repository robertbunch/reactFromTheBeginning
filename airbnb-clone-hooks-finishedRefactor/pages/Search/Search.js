import React, { useState, useEffect } from 'react';
import './Search.css';
import '../Home/Home.css';
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';

function Search(props){

    const [ activities, setActivities ] = useState([])
    const [ cities, setCities ] = useState([])
    const [ venues, setVenues ] = useState([])
    const [ apiResponse, setResponse ] = useState(false)

    useEffect(()=>{
        console.log("Api is not ready yet")
    })

    useEffect(()=>{
        const fetchSearchData = async()=>{
            const searchTerm = props.match.params.searchTerm;
            const url = `${window.apiHost}/search/${searchTerm}`;
            const resp = await axios.get(url);
            setActivities(resp.data.activities)
            setCities(resp.data.cities);
            setVenues(resp.data.venues);
            setResponse(true);
        }
        fetchSearchData()
    },[]) // only run this effect on first render

    if(!apiResponse){
        return <Spinner />
    }
    return (
        <div className="container-fluid lower-fold">
            <div className="row">
                <div className="col s12">
                    <Cities cities={cities} header="Cities Matching Your Search" />
                </div>            
                <div className="col s12">
                    <Activities activities={activities} header="Activies Matching Your Search" />
                </div>            
                <div className="col s12">
                    <Venues venues={venues} header="Venues matching your search" />
                </div>            

            </div>
        </div>
    )
}

export default Search;