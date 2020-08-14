//This component is just an example for the challenge
//It is not used by the app. Login is used instead.

import React, {useState} from 'react';
import './Login.css';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import openModal from '../../actions/openModal';
import SignUp from './SignUp';
import axios from 'axios';
import regAction from '../../actions/regAction'
import swal from 'sweetalert'

function Login(props){

    const useDispatch = useDispatch();

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const submitLogin = async(e)=>{
        e.preventDefault();

        const url = `${window.apiHost}/users/login`;
        const data = {
            email: email,
            password: password
        }
        const resp = await axios.post(url,data);
        const token = resp.data.token;
        
        // -- loggedIn
        // -- badPass
        // -- noEmail

        if(resp.data.msg === "noEmail"){
            swal({
                title: "Please provide an email",
                icon: "error",
              })            
        }else if(resp.data.msg === "badPass"){
            swal({
                title: "Invalid email/password",
                text: "We don't have a match for that user name and password.",
                icon: "error",
              })
        }else if(resp.data.msg === "loggedIn"){
            swal({
                title: "Success!",
                icon: "success",
              });
            // we call our register action to update our auth reducer!!
            dispatch(regAction(resp.data));
        }
    }


    return(
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input onChange={changeEmail} value={email} type="text" className="browser-default" placeholder="Email address" />
                <input onChange={changePassword} value={password} type="password" className="browser-default" placeholder="Password" />
                <button className="sign-up-button">Login</button>
                <div className="divider"></div>
                <div>Don't have an account? <span className="pointer" onClick={()=>dispatch(openModal('open',<SignUp />))}>Sign up</span></div>
            </form>
        </div>
    )
}

}

export default LoginCompleted;
