import React from 'react';
import City from './City';

function Cities(props){
    return props.cities.map((city, i)=>{
        return(
            <div className="col s3">
                <City city={city} key={i} />
            </div>
        )
    })
}


export default Cities;