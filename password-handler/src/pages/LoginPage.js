import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { login } from '../backend_communication/login';
import axios  from 'axios';
import { getUserName } from '../backend_communication/getUserName';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forgotPassword: false,
            currentPopup: null,
            infoHeader: null,
            infoText: null,
            status: null
        }
    }

    #login() {
        if (!document.getElementById("identification").value || !document.getElementById("password").value) {
            this.setState({status: "EMPTY_FIELDS"});
            return;
        }
        this.setState({ currentPopup: "spinner" });
        let loginCallback = (userIP) => {
            this.setState({status: null});
            if (this.props.isAdmin) {
                login(document.getElementById("identification").value, this.props.setLogin, document.getElementById("password").value, userIP, this.props.isAdmin, this.props.setPFP, (statusCode) => {
                    this.setState({status: statusCode});
                    this.setState({ currentPopup: null });
                });
                return;
            }
            getUserName(document.getElementById("identification").value, (uname) => {
                if (uname === null) {
                    this.setState({ infoHeader: "Ops!" });
                    this.setState({ infoText: "Something went wrong during the login." });
                    this.setState({ currentPopup: "info" });
                    return;
                }
                login(uname, this.props.setLogin, document.getElementById("password").value, userIP, this.props.isAdmin, this.props.setPFP, (statusCode) => {
                    this.setState({status: statusCode});
                    this.setState({ currentPopup: null });
                })

            })
        }
        
        axios.get("https://api.ipify.org/?format=json").then(function(response){
            let userIP = response.data["ip"];
            loginCallback(userIP);

        });

    }

    #renderError() {
        switch(this.state.status) {
            case (401):
                return (
                    <>
                        <p style={{ color: "red" }}>You must confirm your ip!</p>
                    </>
                );
            
            case (403):
                return (
                    <>
                        <p style={{ color: "red" }}>Login failed</p>
                    </>
                );

            case ("EMPTY_FIELDS"):
                return (
                    <>
                        <p style={{ color: "red" }}>Some feilds are empty</p>
                    </>
                );

            default:
                return (
                    <>
        
                    </>
                );
        }
    }

    #renderIdentificationInput() {
        if (this.props.isAdmin) {
            return(
                <>
                    <label htmlFor="identification">Username</label> <br />
                    <input type="text" id="identification" name="identification" placeholder='Username..' /> <br />
                </>
            )
        }
        return(
            <>
                <label htmlFor="identification">Username/Email </label> <br />
                <input type="text" id="identification" name="identification" placeholder='Username/Email..' /> <br />
            </>
        )
    }
    #renderHeader() {
        if (this.props.isAdmin) {
            return(
                <h1>Admin login</h1>
            )
        }
        return(
            <h1>Login</h1>
        )
    }
    render() {
        if (this.props.login.isLoggedIn()) {
            return (
                <Navigate to={"/"} />
            );
        }
        else {
            return (
                < >
                    <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                        this.setState({ currentPopup: status });
                        
                    }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {

                    }} />

                    <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                    <div className='signup'>
                        {this.#renderHeader()}
                        
                        <div className='signup_form'>
                            <form onSubmit={e => e.preventDefault()}>
                                {this.#renderIdentificationInput()}
                                <label htmlFor="password">Password </label> <br />
                                <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                                {this.#renderError()}
                                <button id='login_form_button' onClick={() => {
                                    return this.#login();
                                }}>Submit</button>

                                <br/>

                                <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                            </form>

                        </div>
                    </div>
                </>

            );

        }
    }
    
}

export default LoginPage;