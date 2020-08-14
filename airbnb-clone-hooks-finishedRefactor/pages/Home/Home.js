import React, { useState, useEffect } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';

function Home(props){

    const [ cities, setRecCities ] = useState([])
    const [ europeCities, setEuropeCities ] = useState({})
    const [ asiaCities, setAsiaCities ] = useState({})
    const [ exoticCities, setExoticCities ] = useState({})
    const [ recVenues, setRecVenues ] = useState({})
    const [ activities, setActivities ] = useState({});

    useEffect(()=>{
        const citiesUrl = `${window.apiHost}/cities/recommended`;
        const europeCitiesUrl = `${window.apiHost}/cities/europe`;
        const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
        const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

        const citiesPromises = [];
        async function getData(){
            citiesPromises.push(axios.get(citiesUrl));
            citiesPromises.push(axios.get(europeCitiesUrl));
            citiesPromises.push(axios.get(asiaCitiesUrl));
            citiesPromises.push(axios.get(exoticCitiesUrl));

            const resp = await Promise.all(citiesPromises);
            setRecCities(resp[0].data)
            setEuropeCities(resp[1].data)
            setAsiaCities(resp[2].data)
            setExoticCities(resp[3].data)

            const activitiesUrl = `${window.apiHost}/activities/today`;
            const activities = await axios(activitiesUrl);
            setActivities(activities.data)

            const recVenuesUrl = `${window.apiHost}/venues/recommended`;
            const venues = await axios(recVenuesUrl);
            setRecVenues(venues.data,)
        }
        getData();
    },[])

    // console.log(this.state.activities);
    if((cities.length === 0) || (!recVenues.venues)){
        return(<Spinner />)
    }

    return(<>
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox history={props.history} />
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid lower-fold">
            <div className="row">
                <div className="col s12">
                    <Cities cities={cities} header="Recommended Cities For You" />
                </div>

                <div className="col s12">
                    <Activities activities={activities} header="Today in your area" />
                </div>
    
                <div className="col s12">
                    <Cities cities={europeCities.cities} header={europeCities.header} />
                </div>

                <div className="col s12">
                    <Venues venues={recVenues.venues} header={recVenues.header} />
                </div>
                

                <div className="col s12">
                    <Cities cities={asiaCities.cities} header={asiaCities.header} />
                </div>

                <div className="col s12">
                    <Cities cities={exoticCities.cities} header={exoticCities.header} />
                </div>



            </div>
        </div>
    </>
    )
}

export default Home;
