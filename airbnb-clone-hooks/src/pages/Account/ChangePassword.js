import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import {connect} from 'react-redux'
class ChangePass extends Component{

    state = { 
        newPassword: "",
        confirmPassword: "",
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newPassword = this.state.newPassword;
        const confirmPassword = this.state.confirmPassword;
        if (newPassword !== confirmPassword) {
          swal({
            title: "Password don't match",
            icon: "error",
          });
        } else {
            const data = {
                token: this.props.auth.token,
                newPassword,
            }
            const url = `${window.apiHost}/users/change-password`;
            const res = await axios.post(url, data);
            console.log(res.data);
          if (res.data.msg === "passUpdated") {
            swal({
              title: "Password is updated",
              icon: "success",
            });
          } else {
            swal({
              title: "There was a error cancelling",
              icon: "error",
            });
          }
        }
        console.log(newPassword);
    };
    render(){
        return(
            <div className="change-pass center">
                <h1>Change Your Password</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s12">
                            <div className="col s6 search-box-form">
                                <div class="form-label">New Password</div>
                                <div class="input-field" id="where">
                                    <input 
                                        class="browser-default" 
                                        placeholder="New Password" 
                                        type="password" 
                                        onChange={(e)=>this.setState({newPassword: e.target.value})}
                                        value={this.state.newPassword} />
                                </div>
                            </div>                                

                            <div className="col s6 search-box-form">
                                <div class="form-label">Confirm Password</div>
                                <div class="input-field" id="where">
                                    <input 
                                        class="browser-default" 
                                        placeholder="Confirm Password" 
                                        type="password" 
                                        onChange={(e)=>this.setState({confirmPassword: e.target.value})}
                                        value={this.state.confirmPassword} />
                                </div>
                            </div>
                        </div> 
                        <input type="submit" className="btn-large waves-effect waves-light red accent-2" value="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(ChangePass);
