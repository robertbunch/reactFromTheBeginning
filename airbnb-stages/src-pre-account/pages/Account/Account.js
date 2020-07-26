import React, { Component } from 'react';
import './Account.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
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

    }

    render(){
        return(
            <h1>Account sanity Check</h1>
        )
    }

}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Account);
