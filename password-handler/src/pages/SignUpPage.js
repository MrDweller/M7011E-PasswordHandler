import React from 'react';
import Header from '../navbar/Header';
import RestRequest from '../backend_communication/RestRequest';

class SignUpPage extends React.Component {
    #signUp() {
        console.log("submit!");
        console.log( document.getElementById("uname").value );
        console.log( document.getElementById("email").value );
        console.log( document.getElementById("password").value );
        console.log( document.getElementById("repeat_password").value );
        
        let requestData = {};
        requestData["uname"] = document.getElementById("uname").value;
        requestData["email"] = document.getElementById("email").value;
        requestData["password"] = document.getElementById("password").value;
        console.log(requestData);
        RestRequest.post("localhost", 8080, "/user", requestData, (responseData) => {
            
        });
    }

    render() {
        return (
            < >
                <Header />
                <div className='signup'>
                    <h1>Sign Up</h1>
                    <div className='signup_form'>
                        <form>
                            <label htmlFor="uname">User name </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='User name..' /> <br />
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="text" id="email" name="email" placeholder='Email...' /> <br />
                            <label htmlFor="password">Password </label> <br />
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeat_password">Repeat Password </label> <br />
                            <input type="password" id="repeat_password" name="repeat_password" placeholder='Repeat password...' /> <br />
                        </form>
                        <button id='signup_form_button' onClick={() => {
                            this.#signUp();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo"/>

                    </div>
                </div>
            </>
            
        );
    }
}

export default SignUpPage;