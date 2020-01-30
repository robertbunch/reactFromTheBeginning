import React, {Component} from 'react';
import './Login.css';

class Login extends Component{

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <span>or</span>
                    <input type="text" placeholer="Email Address" />
                    <input type="password" className="password-signup" placeholder="Passord" />
                    <button className="sign-up-button">Log in</button>

                </form>
            </div>
        )
    }

}

export default Login;