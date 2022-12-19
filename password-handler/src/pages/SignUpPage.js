import React from 'react';
import Header from '../navbar/Header';
import { Navigate } from "react-router-dom";
import { signup } from '../backend_communication/signup';
import axios  from 'axios';

import {isValidEmail} from '../errorChecks';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    #signUp() {
        if (document.getElementById("password").value !== document.getElementById("repeat_password").value)
        {
            this.setState({error: "diffPwd"});
            
        }
        else if (!isValidEmail(document.getElementById("email").value)) {
            this.setState({error: "notValidEmail"});
        }
        else {
            let signupCallback = (userIP) => {
                signup(document.getElementById("uname").value, document.getElementById("email").value, document.getElementById("password").value, userIP , this.props.setToken, this.props.setUserName);
            
            }
            
            axios.get("https://geolocation-db.com/json/").then(function(response){
                let userIP = response.data["IPv4"];
                signupCallback(userIP);
    
            });
            
        }

    }

    #renderError() {
        switch(this.state.error) {
            case ("diffPwd"):
                return (
                    <>
                        <p style={{color: "red"}}>The passwords are different!</p>
                    </>
                );

            case ("notValidEmail"):
                return (
                    <>
                        <p style={{color: "red"}}>The email is not valid!</p>
                    </>
                );

            default:
                return (
                    <>
        
                    </>
                );
        }
    }

    render() {
        if (this.props.token) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName}  />
                <div className='signup'>
                    <h1>Sign Up</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="uname">User name </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='User name..' /> <br />
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="email" id="email" name="email" placeholder='Email...' /> <br />
                            <label htmlFor="password">Password </label> <br />
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeat_password">Repeat Password </label> <br />
                            <input type="password" id="repeat_password" name="repeat_password" placeholder='Repeat password...' /> <br />
                            {this.#renderError()}
                            <button type="submit" id='signup_form_button' onClick={() => {
                                this.#signUp();
                            }}>Submit</button>
                            <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo"/>
                        </form>

                    </div>
                </div>
            </>
            
        );
    }
}

export default SignUpPage;