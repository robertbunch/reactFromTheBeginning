import React from 'react';
import Venue from './Venue';
import './Venue.css'  

function Venues(props){
    console.log(props)
    const venues = props.venues.map((venue, i)=>{
        console.log(venue)
        return(
            <div key={i} className="col m6 l3">
                <Venue venue={venue} key={i} />
            </div>
        )
    })
    return(
        <div className="venues">
            <h1 className="main-header-text">{props.header}</h1>
            {venues}
        </div>
    )
}

export default Venues;