import React from 'react';
import Header from '../navbar/Header';
import RestRequest from '../backend_communication/RestRequest';


class LoginPage extends React.Component {
    #login() {
        console.log("submit!");
        console.log( document.getElementById("identification").value );
        console.log( document.getElementById("password").value );
        
        let requestData = {};
        requestData["identification"] = document.getElementById("identification").value;
        requestData["password"] = document.getElementById("password").value;
        console.log(requestData);
        RestRequest.post("localhost", 8080, "/authenticate", requestData, (responseData) => {
            
        });
    }
    render() {
        return (
            < >
                <Header />
                <div className='signup'>
                    <h1>Login</h1>
                    <div className='signup_form'>
                        <form>
                            <label htmlFor="identification">User name/Email </label> <br />
                            <input type="text" id="identification" name="identification" placeholder='User name/Email..' /> <br />
                            <label htmlFor="password">Email </label> <br/> 
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                        </form>
                        <button id='login_form_button' onClick={() => {
                            this.#login();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo"/>

                    </div>
                </div>
            </>
            
        );
    }

    #buttonAction() {
        console.log("Button pressed")
        
        
    }
}

export default LoginPage;