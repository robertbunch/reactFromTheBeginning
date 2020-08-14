import React, { useState, useEffect } from 'react';
import './Account.css';
import { useSelector, shallowEqual } from 'react-redux'
// import { bindActionCreators } from 'redux';
import axios from 'axios';
import moment from 'moment';
import { Route } from 'react-router-dom'
import AccountSideBar from './AccountSideBar';
import Bookings from './Bookings';
import ChangePassword from './ChangePassword'

function Account(props){

    const token = useSelector(state => state.auth.token, shallowEqual);

    const [ pastBookings, setPastBookings ] = useState([])
    const [ upcomingBookings, setUpcomingBookings ] = useState([])


    useEffect(()=>{
        const accountUrl = `${window.apiHost}/users/getBookings`;
        const data = {
            token: token,
        }
        const fetchAccountData = async()=>{
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

            setPastBookings(pastBookings)
            setUpcomingBookings(upcomingBookings)
        };
        fetchAccountData();
    },[])

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
                        <Bookings type="upcoming" bookings={upcomingBookings} token={token} />
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


// export default connect(mapStateToProps)(Account);
export default Account;
