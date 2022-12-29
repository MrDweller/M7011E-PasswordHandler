import React from 'react';
import Header from '../navbar/Header';
import { Navigate } from "react-router-dom";
import { login } from '../backend_communication/login';
import axios  from 'axios';
import { getUserName } from '../backend_communication/getUserName';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forgotPassword: false
        }
    }

    #login() {
        let loginCallback = (userIP) => {
            if (this.props.isAdmin) {
                login(document.getElementById("identification").value, this.props.setLogin, document.getElementById("password").value, userIP, this.props.isAdmin, this.props.setPFP);
                return;
            }
            getUserName(document.getElementById("identification").value, (uname) => {
                login(uname, this.props.setLogin, document.getElementById("password").value, userIP, this.props.isAdmin, this.props.setPFP);

            })
        }
        
        axios.get("https://geolocation-db.com/json/").then(function(response){
            let userIP = response.data["IPv4"];
            loginCallback(userIP);

        });

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
                    <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                    <div className='signup'>
                        {this.#renderHeader()}
                        
                        <div className='signup_form'>
                            <form onSubmit={e => e.preventDefault()}>
                                {this.#renderIdentificationInput()}
                                <label htmlFor="password">Password </label> <br />
                                <input type="password" id="password" name="password" placeholder='Password...' /> <br />
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