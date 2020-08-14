import React, { useState, useEffect } from 'react';
import './Login.css'
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import openModal from '../../actions/openModal';
import regAction from '../../actions/regAction'

import Login from './Login'
import axios from 'axios';
import swal from 'sweetalert';

function SignUp(props){

    const dispatch = useDispatch();

    const [ lowerPartOfForm, setLowerPartOfForm ] = useState("")
    const [ email, changeEmail ] = useState("")
    const [ password, changePassword ] = useState("")

    useEffect(()=>{
        setLowerPartOfForm(
            <button 
                type="button" 
                onClick={showInputs} 
                className="sign-up-button"
            >Sign up with email
            </button>
        )
    },[])


    const showInputs = ()=>{
        setLowerPartOfForm(
            <SignUpInputFields 
                changeEmail={(e)=>changeEmail(e.target.value)} 
                changePassword={(e)=>changePassword(e.target.value)} 
            />
        )
    }

    const submitLogin = async(e)=>{
        e.preventDefault();
        const url = `${window.apiHost}/users/signup`;
        const data = {
            email: email,
            password: password
        }
        console.log(data)
        const resp = await axios.post(url,data);
        console.log(resp.data)
        const token = resp.data.token;
        ////////////
        // resp.data.msg could be:
        // - invalidData
        // - userExists
        // - userAdded
        if(resp.data.msg === "userExists"){
            swal({
                title: "Email Exists",
                text: "The email you provided is already registered. Please try another.",
                icon: "error",
              })            
        }else if(resp.data.msg === "invalidData"){
            swal({
                title: "Invalid email/password",
                text: "Please provide a valid email and password",
                icon: "error",
              })
        }else if(resp.data.msg === "userAdded"){
            swal({
                title: "Success!",
                icon: "success",
              });
            // we call our register action to update our auth reducer!!
        }
        dispatch(regAction(resp.data))
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
                {lowerPartOfForm}
                <div className="divider"></div>
                <div>Already have an account? <span className="pointer" onClick={()=>dispatch(openModal('open',<Login />))}>Log in</span></div>
            </form>
        </div>

    )
}


export default SignUp;


const SignUpInputFields = (props)=>{
    return(
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field" id="email">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="Email" onChange={props.changeEmail} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="password">
                    <div className="form-label">Password</div>
                    <input type="password" placeholder="Password" onChange={props.changePassword} />
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="btn red accent-2">Sign Up!</button>
            </div>
        </div>
    )
}


