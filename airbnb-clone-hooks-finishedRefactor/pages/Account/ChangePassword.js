import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useSelector } from 'react-redux'
function ChangePass(props){

    const token = useSelector(state => state.auth.token);

    const [ newPassword, setNewPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
          swal({
            title: "Password don't match",
            icon: "error",
          });
        } else {
            const data = {
                token: token,
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
    };
    return(
        <div className="change-pass center">
            <h1>Change Your Password</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12">
                        <div className="col s6 search-box-form">
                            <div className="form-label">New Password</div>
                            <div className="input-field" id="where">
                                <input 
                                    className="browser-default" 
                                    placeholder="New Password" 
                                    type="password" 
                                    onChange={(e)=>setNewPassword(e.target.value)}
                                    value={newPassword} />
                            </div>
                        </div>                                

                        <div className="col s6 search-box-form">
                            <div className="form-label">Confirm Password</div>
                            <div className="input-field" id="where">
                                <input 
                                    className="browser-default" 
                                    placeholder="Confirm Password" 
                                    type="password" 
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    value={confirmPassword} />
                            </div>
                        </div>
                    </div> 
                    <input type="submit" className="btn-large waves-effect waves-light red accent-2" value="submit"/>
                </div>
            </form>
        </div>
    )
}



export default ChangePass;
