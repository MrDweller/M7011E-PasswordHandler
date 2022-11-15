import React, { useContext } from 'react';
import Header from '../navbar/Header';
import RestRequest from '../backend_communication/RestRequest';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

 

class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            setToken: props.setToken,
            token:props.token
        }
    }


    #login() {
        console.log("submit!");
        console.log(document.getElementById("identification").value);
        console.log(document.getElementById("password").value);


        let requestData = {};
        requestData["identification"] = document.getElementById("identification").value;
        requestData["password"] = document.getElementById("password").value;
        console.log(requestData);
        RestRequest.post("localhost", 8080, "/authenticate", requestData, (responseData) => {

            
            if (responseData["status"] !== null) {
                console.log("PUSH");
                
                //this.setState({ success: true });
                this.state.setToken(responseData["status"]);
            
            };
        });
    }
    render() {
        
        if (this.state.token) {
            return (
                <Navigate to={"/"} />
            );
        }
        else {
            return (
                < >

                    <Header />
                    <div className='signup'>
                        <h1>Login</h1>
                        <div className='signup_form'>
                            <form>
                                <label htmlFor="identification">User name/Email </label> <br />
                                <input type="text" id="identification" name="identification" placeholder='User name/Email..' /> <br />
                                <label htmlFor="password">Email </label> <br />
                                <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            </form>
                            <button id='login_form_button' onClick={() => {
                                return this.#login();
                            }}>Submit</button>
                            <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />

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