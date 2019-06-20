// const Help = ()=><h1>Help</h1>
import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpCustomer = ()=><h1>Help Customer</h1>
const HelpHost = ()=><h1>Help Host</h1>

function Help(props){
    console.log(props.match);
    return(
        <div>
            <div>
                <Link to="/help/customer">I am a customer</Link> | 
                <Link to="/help/host">I am a host</Link>
            </div>
            <p>An image goes here</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />
            <h3>Footer for Help</h3>
        </div>
    )
}

export default Help;