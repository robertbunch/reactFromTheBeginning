import React, {Component} from 'react';

class SignUp extends Component{

    constructor(){
        super();
        this.state = {
            lowerPartOfForm: <button type="button" onClick={this.showInputs} className="sign-up-button">Sign up with email</button>
        }
    }

    changeEmail = (e)=>this.setState({email:e.target.value})
    changePassword = (e)=>this.setState({password:e.target.value})

    showInputs = ()=>{
        this.setState({
            lowerPartOfForm: <SignUpInputFields 
                changeEmail={this.changeEmail} 
                changePassword={this.changePassword} 
            />
        })
    }

    submitLogin = (e)=>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? Log in</div>
                </form>
            </div>

        )
    }

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


