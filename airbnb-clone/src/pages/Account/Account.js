import React, { Component } from 'react';
import './Account.css';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';
import { Route } from 'react-router-dom'
import AccountSideBar from './AccountSideBar';
import Bookings from './Bookings';
import ChangePassword from './ChangePassword'

class Account extends Component{

    state = {
        pastBookings: [],
        upcomingBookings: [],
    }

    async componentDidMount(){
        const accountUrl = `${window.apiHost}/users/getBookings`;
        const data = {
            token: this.props.auth.token,
        }
        const resp = await axios.post(accountUrl,data);
        console.log(resp.data);
        let pastBookings = []
        let upcomingBookings = [];
        resp.data.forEach(booking => {
            const today = moment(); //get today's date so we know what is past and what is future
            const checkOutDate = moment(booking.checkOut);
            const diffDays = checkOutDate.diff(today,"days");
            if(diffDays < 0){
                pastBookings.push(booking);
            }else{
                upcomingBookings.push(booking);
            }
        });
        this.setState({
            pastBookings,
            upcomingBookings,
        })
    }

    render(){
        const { pastBookings, upcomingBookings } = this.state;
        // console.log(pastBookings);
        // console.log(upcomingBookings);
        return(
            <div className="account container-fluid">
                <AccountSideBar />
                <div className="row">
                    <div className="col s8 offset-s3">
                        <Route exact path="/account" render={()=>
                            <h1>Choose an option on the left!</h1>
                        } />
                        <Route exact path="/account/reservations/confirmed" render={()=>
                            <Bookings type="upcoming" bookings={upcomingBookings} token={this.props.auth.token} />
                        } />
                        <Route exact path="/account/reservations/past">
                            <Bookings type="past" bookings={pastBookings} />
                        </Route>
                        <Route exact path="/account/change-pass" component={ChangePassword} />
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

export default connect(mapStateToProps)(Account);
