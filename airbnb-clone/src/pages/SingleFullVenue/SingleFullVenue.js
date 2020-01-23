import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment'; //import
import Point from './Point';

class FullAbode extends Component{
    state = {
        abode: {},
        date1: "",
        date2: "",
        datesMsg: "",
        daysDiff: 0,
        points: [],
    }

    makePayment = ()=>{
        if(!this.props.auth.token){
            this.props.history.push('/login');
        }
        const pKey = 'pk_test_66vdheOxNsdPHLTbdRyyB3wM'
        const numNights = 1;
        const amount = this.state.abode.pricePerNight * numNights;
        var handler = window.StripeCheckout.configure({
            key: pKey,
            locale: 'auto',
            image: `${window.apiHost}${this.state.abode.imageUrl}`,
            token: (token) => {
                console.log(token);
                console.log(this.props.auth.token);
                var theData = {
                    amount: Math.floor(amount * 100),
                    stripeToken: token.id,
                    token: this.props.auth.token,
                    email: this.props.auth.email,
                    abodeId: this.props.match.params.abodeId
                }
                axios({
                    method: 'POST',
                    url: `${window.apiHost}/payment/stripe`,
                    data: theData
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.msg === 'paymentSuccess') {
                        this.props.history.push('/thankyou')
                    }else if(response.data.msg === 'badToken'){
                        this.props.history.push('/login')
                    }else if(response.data.msg === 'paymentFailed'){
                        this.setState({
                            msg: `Payment was unsuccessful. Please email this to support: ${response.data.stripeError}`
                        })
                        console.lo(response.data.stripeError)
                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'AirBnB Payment',
            amount: amount * 100 //the total is in pennies
        })
    }

    async componentDidMount(){
        const vId = this.props.match.params.vid;
        console.log(vId);
        // console.log(abodeId);
        const url = `${window.apiHost}/venue/${vId}`
        const axiosResponse = await axios.get(url)
        const abode = axiosResponse.data;
        console.log(abode);
        const points = abode.points.split(',').map((point,i)=>{
            console.log(point)
            return(
                <Point point={point} />
            )
        })

        this.setState({
            abode,
            points
        })


        var elems = document.querySelectorAll('select');
        // eslint-disable-next-line no-unused-vars
        var instances = window.M.FormSelect.init(elems);

    }

    changeDate1 = (e)=>{
        const date1 = this.state.date1;
        const date2 = this.state.date2;
        const date1M = moment(date1);
        console.log(date1)
        console.log(date1M)
        const date2M = moment(date2);

        if(moment(e.target.value) > moment(date2)){
            this.setState({
                datesMsg: "Check in date must be before checkout date."
            })
        }else if((date1)&&(date2)){
            const daysDiff = date1M.diff(date2, 'days');
            console.log(daysDiff)
            this.setState({
                date1:e.target.value,
                daysDiff
            })
        }
        this.setState({date1:e.target.value})
    }
    changeDate2 = (e)=>{
        const date1 = this.state.date1;
        const date2 = this.state.date2;
        const date1M = moment(date1);
        const date2M = moment(date2);
        if(moment(e.target.value) < moment(date1)){
            this.setState({
                datesMsg: "Check in date must be before checkout date."
            })
        }else if((date1)&&(date2)){
            const daysDiff = date1M.diff(date2, 'days');
            console.log(daysDiff)
            this.setState({
                date1:e.target.value,
                daysDiff
            })
        }


        this.setState({date2:e.target.value})
    }

    render(){
        const abode = this.state.abode;
        let button;
        if(this.props.auth.token){
            button = <button onClick={this.makePayment} className="btn">Reserve 1 night</button>
        }else{
            button = <button onClick={()=>{this.props.history.push('/login')}}className="btn">Please login to reserve</button>
        }
        

        return(
            <div className="row fullAbode">
                <div className="col s12 center">
                    <img src={`${abode.imageUrl}`} />
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{abode.location}</div>
                        <div className="title">{abode.title}</div>
                        <div className="guests">{abode.guests} guests </div>
                        
                        <div className="divider"></div>
                        
                        <div className="venue-points">
                            {this.state.points}
                        </div>

                        <div className="details">{abode.details}</div>
                        <div className="amenties">{abode.amenities}</div>
                    </div>
                    <div className="col s4 right-details">
                        <div className="dates-msg red-text">{this.state.datesMsg}</div>
                        <div className="price-per-day">$ {abode.pricePerNight} <span>per day</span></div>
                        <div className="col s6">
                            Check In
                            <input onChange={this.changeDate1} value={this.state.date1} type="date" />
                        </div>
                        <div className="col s6">
                            Check Out
                            <input onChange={this.changeDate2} value={this.state.date2} type="date" />
                        </div>

                        <div className="input-field col s12">
                            <select value={this.state.guests} onChange={this.changeGuests} >
                                <option value="" disabled>Choose your option</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5 Guests</option>
                                <option value="6">6 Guests</option>
                                <option value="7">7 Guests</option>
                                <option value="8">8 Guests</option>
                                <option value="9">9 Guests</option>
                            </select>
                            <label># of guests</label>
                        </div>             
                        {button}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(FullAbode);