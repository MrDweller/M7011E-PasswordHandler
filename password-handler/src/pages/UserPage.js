import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { changeUname } from '../backend_communication/changeUname';
import { changeMasterPassword } from '../backend_communication/changeMasterPassword';
import { deleteUser } from '../backend_communication/deleteUser';
import { uploadPFP } from '../backend_communication/uploadPFP';
import { changeEmail } from '../backend_communication/changeEmail';

class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPopup: null,
            infoHeader: null,
            infoText: null

        }




    }

    #uploadPFP() {

        const imageInput = document.querySelector("#pfp");
        const file = imageInput.files[0];


        uploadPFP(this.props.login, this.props.setLogin, file, this.props.setPFP);
    }

    #render_profilePic() {
        // if (this.props.login.isAdmin()) {
        // }
        
        return (
            <>
                <div className='userpage_right_container'>
                    <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Profile" />

                </div>
                
            </>
        );


        // return (
        //     <>
        //         <div className='userpage_right_container'>
        //             <img className="userpage_profile_image" src={`${this.props.pfp["pfpURL"]}?${this.props.pfp["pfpHash"]}`} alt="Profile" />
        //             <form id="pfpForm" onSubmit={e => e.preventDefault()}>
        //                 <input type="file" id="pfp" name="pfp" accept="image/*" />
        //                 <button type="submit" id='upload_pfp_button' onClick={() => {
        //                     this.#uploadPFP();


        //                 }}>Submit</button>


        //             </form>

        //         </div>
        //     </>
        // );
    }

    #render_header() {
        if (this.props.login.isAdmin()) {
            return (
                <>
                    <h1>Admin profile</h1>
                </>
            );
        }
        return (
            <>
                <h1>User profile</h1>
            </>
        );
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
                }} handleNewUname={(new_uname, password) => {
                    if (!new_uname) {
                        this.setState({infoHeader: "Something went wrong!"});
                        this.setState({infoText: "You must enter all the fields!"});
                        this.setState({currentPopup: "info"});
                        return;
                    }
                    changeUname(this.props.login, this.props.setLogin, new_uname, password, (result) => {
                        if (result === true) {
                            this.setState({infoHeader: "Success!"});
                            this.setState({infoText: "The username was changed successfully!"});
                            this.setState({currentPopup: "info"});
                        }
                        else if (result === 470) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "That username is used by someone else!"});
                            this.setState({currentPopup: "info"});
                        }
                        else if (result === 401) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "Wrong password!"});
                            this.setState({currentPopup: "info"});
                        }
                        else {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "A unexpected problem occured when changing your username!"});
                            this.setState({currentPopup: "info"});
                        }
                    });
                }} handleNewEmail={(new_email, password) => {
                    if (!new_email) {
                        this.setState({infoHeader: "Something went wrong!"});
                        this.setState({infoText: "You must enter all the fields!"});
                        this.setState({currentPopup: "info"});
                        return;
                    }
                    changeEmail(this.props.login, this.props.setLogin, new_email, password, (result) => {
                        if (result === true) {
                            this.setState({infoHeader: "Success!"});
                            this.setState({infoText: "The email was changed successfully!"});
                            this.setState({currentPopup: "info"});
                        }
                        else if (result === 471) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "That email is used by someone else!"});
                            this.setState({currentPopup: "info"});
                        }
                        else if (result === 401) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "Wrong password!"});
                            this.setState({currentPopup: "info"});
                        }
                        else {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "A unexpected problem occured when changing your email!"});
                            this.setState({currentPopup: "info"});
                        }
                    })
                }} handleNewMasterPassword={(old_password, new_password, new_password2) => {
                    if (!old_password || !new_password || !new_password2) {
                        this.setState({infoHeader: "Something went wrong!"});
                        this.setState({infoText: "You must enter all the fields!"});
                        this.setState({currentPopup: "info"});
                        return;
                    }
                    if (new_password !== new_password2) {
                        this.setState({infoHeader: "Something went wrong!"});
                        this.setState({infoText: "The passwords doesn't match!"});
                        this.setState({currentPopup: "info"});
                        return;
                    }
                    changeMasterPassword(this.props.login, this.props.setLogin, old_password, new_password, (result) => {
                        if (result === true) {
                            this.setState({infoHeader: "Success!"});
                            this.setState({infoText: "The password was changed successfully!"});
                            this.setState({currentPopup: "info"});
                        }
                        else {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "A unexpected problem occured when changing your password!"});
                            this.setState({currentPopup: "info"});
                        }
                    });
                }} handleDeleteUser={(password) => {
                    deleteUser(this.props.login, this.props.setLogin, password);
                }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {

                }} />

                <Header login={this.props.login} setLogin={this.props.setLogin} pfp={this.props.pfp} setPFP={this.props.setPFP} />
                <div className='userpage'>
                    {this.#render_header()}
                    <div className='userpage_left_container'>
                        <h1>{this.props.login.getUname()}</h1>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newUname" });
                        }}>Change Username</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newEmail" });
                        }}>Change Email</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "newMasterPassword" });
                        }}>Change Password</button>
                        <button onClick={() => {
                            this.setState({ currentPopup: "delete_user_popup" });
                        }}>Delete user</button>

                    </div>
                   {this.#render_profilePic()}
                </div>
            </>
        );
    }
}

export default UserPage;