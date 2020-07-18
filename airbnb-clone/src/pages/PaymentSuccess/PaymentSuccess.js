import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import './PaymentSuccess.css'

library.add(faLongArrowAltRight);

class PaymentSuccess extends Component{

    state = {
        waiting: true,
        reservationDetails: {},
    }

    async componentDidMount(){
        console.log(this.props.auth.token)
        const data = {
            stripeToken: this.props.match.params.token,
            token: this.props.auth.token,
        }
        const url = `${window.apiHost}/payment/success`;
        const resp = await axios.post(url,data);
        console.log(resp.data)
        this.setState({
            waiting: false,
            reservationDetails: resp.data.reservationDetails,
        })
        console.log(resp.data);
    }

    render(){
        if(this.state.waiting){
            return <Spinner />
        }
        console.log(this.state)
        const rd = this.state.reservationDetails
        const vd = rd.venueData;
        return(
            // <h1>Got some data!</h1>
            <div className="reservation-success row">
                <h1 className="col m12 center">Start packing!</h1>
                <div className="resv-details col s8 offset-s2">
                    <div className="confirmed col m12 row">
                        <FontAwesomeIcon icon="long-arrow-alt-right" size="1x" color="#ED0000" />Confirmed: {rd.diffDays} nights in {vd.location} 
                        {/* {rd.numberOfGuests} guests, for  if this were a real site! */}
                        <div className="header-text">
                            <div>Booked by: {this.props.auth.email}</div>
                            <div>{moment().format('MMMM Do, YYYY')}</div>
                        </div>
                    </div>
                    <div className="confirmed-detail row">
                        <div className="col m5">
                            <div className="bordered col">
                                <div className="col m12 upper">
                                    <div className="left">Check in</div><div className="right">Check out</div>
                                </div>
                                <div className="col m12 lower">
                                    <div className="left">{moment(rd.checkIn).format('MMM Do, YYYY')}</div><div className="right">{moment(rd.checkOut).format('MMM Do, YYYY')}</div>
                                </div>
                                <div className="col m12 title-text">
                                    {vd.title}
                                </div>  
                                <div className="col m12 details">
                                    {vd.details}
                                </div>  
                            </div>
                        </div>


                        <div className="col m7">
                            <div className="bordered col">
                                <div className="col m12 upper charges">
                                    <div className="charges-text col m12">Charges</div>
                                    <div className="row col m12">
                                        <div className="left">${rd.pricePerNight} x {rd.diffDays} days</div>
                                        <div className="right">${rd.totalPrice}</div>
                                    </div>
                                    <div className="row col m12">
                                        <div className="left">Discount</div>
                                        <div className="right">$0</div>
                                    </div>                                
                                    <div className="row col m12 total">
                                        <div className="left">TOTAL</div>
                                        <div className="right">${rd.totalPrice}</div>
                                    </div>
                                </div>
                                <div className="col m12 row">To rview or make changes to your reservation in the future, visit your <Link to="/account">account page</Link>.</div>
                                <div className="col m12 resv-image"><img src={vd.imageUrl} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}


export default connect(mapStateToProps)(PaymentSuccess);
