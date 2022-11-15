import React from 'react';
import Header from '../navbar/Header';
import { Navigate } from "react-router-dom";
import { signup } from '../backend_communication/signup';
class SignUpPage extends React.Component {
    #signUp() {
        signup(document.getElementById("uname").value, document.getElementById("email").value, document.getElementById("password").value, this.props.setToken);

    }

    render() {
        if (this.props.token) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken}  />
                <div className='signup'>
                    <h1>Sign Up</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="uname">User name </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='User name..' /> <br />
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="text" id="email" name="email" placeholder='Email...' /> <br />
                            <label htmlFor="password">Password </label> <br />
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeat_password">Repeat Password </label> <br />
                            <input type="password" id="repeat_password" name="repeat_password" placeholder='Repeat password...' /> <br />
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