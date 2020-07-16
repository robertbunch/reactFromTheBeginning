import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point';

class SingleFullVenue extends Component{

    state = {
        singleVenue: {},
        points: [],
        checkIn: "",
        checkOut: "",
        numberOfGuests: 1,
    }

    async componentDidMount(){
        const vId = this.props.match.params.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue = axiosResponse.data;

        const pointsUrl = `${window.apiHost}/points/get`;
        const pointsAxiosResponse = await axios.get(pointsUrl);
        
        const points = singleVenue.points.split(',').map((point,i)=>{
            return(<Point key={i} pointDesc={pointsAxiosResponse.data} point={point} /> )
        })
        this.setState({singleVenue,points});
    }

    changeNumberOfGuests = (e)=>{this.setState({numberOfGuests: e.target.value})}
    changeCheckIn = (e)=>{this.setState({checkIn: e.target.value})}
    changeCheckOut = (e)=>{this.setState({checkOut: e.target.value})}

    reserveNow = (e)=>{
        console.log("User wants to reserve!")
    }

    render(){
        console.log(this.state.singleVenue);
        const sv = this.state.singleVenue;
        return(
            <div className="row single-venue">
                <div className="col s12 center">
                    <img src={sv.imageUrl} />
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{sv.location}</div>
                        <div className="title">{sv.title}</div>
                        <div className="guests">{sv.guests}</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{sv.details}</div>
                        <div className="amenities">{sv.amenities}</div>
                    </div>

                    <div className="col s4 right-details">
                        <div className="price-per-day">${sv.pricePerNight} <span>per day</span></div>
                        <div className="rating">{sv.rating}</div>
                        <div className="col s6">
                            Check-In
                            <input type="date" onChange={this.changeCheckIn} value={this.state.checkIn} />
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date" onChange={this.changeCheckOut} value={this.state.checkOut} />
                        </div>     

                        <div className="col s12">
                            <select className="browser-default" onChange={this.changeNumberOfGuests} value={this.state.numberOfGuests}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                                <option value="5">5 Guest</option>
                                <option value="6">6 Guest</option>
                                <option value="7">7 Guest</option>
                                <option value="8">8 Guest</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>   
                        </div>            
                    </div>

                </div>
            </div>
        )
    }
}

export default SingleFullVenue;