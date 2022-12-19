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
            getUserName(document.getElementById("identification").value, (uname) => {
                login(uname, this.props.setUserName, this.props.setToken, document.getElementById("password").value, userIP);

            })
        }
        
        axios.get("https://geolocation-db.com/json/").then(function(response){
            let userIP = response.data["IPv4"];
            loginCallback(userIP);

        });
        //login(document.getElementById("identification").value, document.getElementById("password").value, userIP, this.props.setToken);
        

    }
    render() {
        if (this.props.token) {
            return (
                <Navigate to={"/"} />
            );
        }
        else {
            return (
                < >
                    <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} />
                    <div className='signup'>
                        <h1>Login</h1>
                        <div className='signup_form'>
                            <form onSubmit={e => e.preventDefault()}>
                                <label htmlFor="identification">User name/Email </label> <br />
                                <input type="text" id="identification" name="identification" placeholder='User name/Email..' /> <br />
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

    #buttonAction() {
        console.log("Button pressed")


    }
}

export default LoginPage;