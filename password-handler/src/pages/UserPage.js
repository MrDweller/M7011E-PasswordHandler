import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { changeMasterPassword } from '../backend_communication/changeMasterPassword';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPopup: null
        }
    }
    render() {
        if (this.props.token === null) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({ currentPopup: status });
                }} handleNewMasterPassword={(old_password, new_password, new_password2) => {
                    if (new_password === new_password2) {
                        changeMasterPassword(this.props.token, old_password, new_password, this.props.setToken, (result) => {
                            if (result) {
                                console.log("password changed");
                            }
                        });
                    }
                }} />
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} />
                <div className='userpage'>
                    <div className='userpage_left_container'>
                        <h1>{this.props.userName}</h1>
                        <button >Change Username</button>
                        <button >Change Email</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newMasterPassword" });
                        }}>Change Password</button>

                    </div>
                    <div className='userpage_right_container'>
                        <img className="userpage_profile_image" src={require("../media/user_tab.png")} alt="Profile" />
                        <button >Change profile image</button>
                    </div>
                </div>
            </>
        );
    }
}

export default UserPage;