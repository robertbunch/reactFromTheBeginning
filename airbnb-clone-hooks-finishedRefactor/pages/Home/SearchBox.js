import React, { useState } from 'react'
import './SearchBox.css';
import useControlledInput from '../../customHooks/useControlledInput';

function SearchBox(props){

    const where = useControlledInput('')
    const checkIn = useControlledInput('')
    const checkOut = useControlledInput('')
    const guests = useControlledInput(1)

    // const [ where, changeWhere ] = useState("")
    // const [ checkIn, changeCheckIn ] = useState("")
    // const [ checkOut, changeCheckOut ] = useState("")
    // const [ guests, changeGuests ] = useState(1)

    const submitSearch = (e)=>{
        e.preventDefault();
        props.history.push(`/search/${where.value}`)
    }

    return(
        <div className="home-search-box col m4">
            <h1>Book unique places to stay and things to do.</h1>
            
            <form onSubmit={submitSearch} className="search-box-form">
                <div className="col m12">
                    <div className="form-label">Where</div>
                    <div className="input-field" id="where">
                        <input className="browser-default" placeholder="Anywhere" {...where} type="text" />
                    </div>
                </div>

                <div className="col m6">
                    <div className="form-label">Check-In</div>
                    <div className="input-field" id="check-in">
                        <input className="browser-default" {...checkIn} type="date" />
                    </div>
                </div>
                <div className="col m6">
                    <div className="form-label">Check-Out</div>
                    <div className="input-field" id="check-in">
                        <input className="browser-default" {...checkOut} type="date" />
                    </div>
                </div>
                <div className="col m12">
                    <div className="form-label">Guests</div>
                    <div className="input-field" id="where">
                        <input className="browser-default" placeholder="Number of guests" {...guests} type="number" />
                    </div>
                </div>
                <div className="col m12 submit-btn">
                    <div className="input-field" id="submit-btn">
                        <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                    </div>
                </div>


            </form>
        </div>
    )
}

export default SearchBox;