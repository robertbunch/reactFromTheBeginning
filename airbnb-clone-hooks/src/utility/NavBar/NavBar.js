import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import openModal from '../../actions/openModal';
import logoutAction from '../../actions/logoutAction';
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/Login/SignUp'

function NavBar(props){

    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email)
    const token = useSelector(state => state.auth.token)

    // const auth = useSelector(state => state.auth)

    useEffect(()=>{
        dispatch(openModal('closed',''))
    },[token])

    let navColor = 'transparent';
    if(props.location.pathname !== '/'){
        // then user is not on the home page!
        navColor = 'black'
    }
    
    return(<div className="container-fluid nav">
        <div className="row">
            <nav className={navColor}>
                <div className="nav-wrapper">
                    <Link to="/" className="left">airbnb</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/">English (US)</Link></li>
                        <li><Link to="/">$ USD</Link></li>
                        <li><Link to="/">Become a host</Link></li>
                        <li><Link to="/">Help</Link></li>
                        {email
                            ?   <> 
                                    <li><Link to="/account">Hello, {email}</Link></li>
                                    <li onClick={()=>dispatch(logoutAction())}>Logout</li>
                                </>
                            :   <>
                                    <li className="login-signup" onClick={()=>dispatch(openModal('open',<SignUp />))}>Sign Up</li>
                                    <li className="login-signup" onClick={()=>dispatch(openModal('open',<Login />))}>Log in</li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default NavBar;
