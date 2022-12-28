import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { changeUname } from '../backend_communication/changeUname';
import { changeMasterPassword } from '../backend_communication/changeMasterPassword';
import { deleteUser } from '../backend_communication/deleteUser';
import { uploadPFP } from '../backend_communication/uploadPFP';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPopup: null,
            
            
        }
        
        
        
        
    }

    #uploadPFP(token){
        
        //console.log(document.getElementById("pfp").value);
        const imageInput = document.querySelector("#pfp");
        const file = imageInput.files[0];
        
        
        uploadPFP(token, file, this.props.setPFP);
    }

    #getPFP(token){
        
        
    }
    
    render() {
        if (!this.props.login.isLoggedIn()) {
            return (
                <Navigate to={"/"} />
            );
        }
        
        return (
            < >
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({ currentPopup: status });
                }} handleNewUname={(new_uname) => {
                    changeUname(this.props.login, this.props.setLogin, new_uname, (result) => {
                        if (result) {
                            console.log("uname changed");
                        }
                    });
                }} handleNewEmail={(new_email) => {
                    console.log(new_email);
                }} handleNewMasterPassword={(old_password, new_password, new_password2) => {
                    if (new_password === new_password2) {
                        changeMasterPassword(this.props.login, this.props.setLogin, old_password, new_password, (result) => {
                            if (result) {
                                console.log("password changed");
                            }
                        });
                    }
                }} handleWarning={(status) => {
                    if (status === true) {
                        deleteUser(this.props.login, this.props.setLogin);
                    }
                }}/>

                <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                <div className='userpage'>
                    <div className='userpage_left_container'>
                        <h1>{this.props.login.getUname()}</h1>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newUname"});
                        }}>Change Username</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newEmail"});
                        }}>Change Email</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newMasterPassword" });
                        }}>Change Password</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "warning" });
                        }}>Delete user</button>

                    </div>
                    <div className='userpage_right_container'>
                    <img className="userpage_profile_image" src={`${this.props.pfp["pfpURL"]}?${this.props.pfp["pfpHash"]}`} alt="Profile" />
                        <form id = "pfpForm" onSubmit={e => e.preventDefault()}>
                            <input type="file" id="pfp" name="pfp" accept="image/*" />
                            <button type="submit" id='upload_pfp_button' onClick={() => {
                                this.#uploadPFP(this.props.token);
                                
                                

                            }}>Submit</button>
                                
                            
                            </form>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default UserPage;