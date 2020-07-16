import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/Login/SignUp'

class NavBar extends Component{

    componentDidUpdate(oldProps){
        if(oldProps.auth.token !== this.props.auth.token){
            this.props.openModal('closed','');
        }
    }

    render(){

        let navColor = 'transparent';
        if(this.props.location.pathname !== '/'){
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
                            {this.props.auth.email
                                ?   <>
                                        <li>Hello, {this.props.auth.email}</li>
                                        <li>Logout</li>
                                    </>
                                :   <>
                                        <li className="login-signup" onClick={()=>{this.props.openModal('open',<SignUp />)}}>Sign Up</li>
                                        <li className="login-signup" onClick={()=>{this.props.openModal('open',<Login />)}}>Log in</li>
                                    </>
                            }
                        </ul>
                    </div>
                </nav>
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

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal
    },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
