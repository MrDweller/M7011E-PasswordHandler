import React from 'react';
import Header from '../../navbar/Header';
import { Navigate } from "react-router-dom";
import { createAdmin } from '../../backend_communication/Admin/createAdmin';
import { isValidEmail } from '../../errorChecks';

class CreateAdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    #create() {
        if (!isValidEmail(document.getElementById("email").value)) {
            this.setState({error: "notValidEmail"});
        }
        else {
            createAdmin(this.props.login, document.getElementById("uname").value, document.getElementById("email").value, (errorCode) => {
                this.setState({error: errorCode});
            });

        }

    }

    #renderError() {
        switch(this.state.error) {
            case ("notValidEmail"):
                return (
                    <>
                        <p style={{color: "red"}}>The email is not valid!</p>
                    </>
                );

            case ("UNAME_TAKEN"):
                return (
                    <>
                        <p style={{color: "red"}}>That username is taken!</p>
                    </>
                );
            
            case ("EMAIL_TAKEN"):
                return (
                    <>
                        <p style={{color: "red"}}>That email is taken!</p>
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
        if (!this.props.login.isSuperAdmin()) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin}  />
                <div className='signup'>
                    <h1>Create admin</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="uname">Username </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='Username..' /> <br />
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="email" id="email" name="email" placeholder='Email...' /> <br />{this.#renderError()}
                            <button type="submit" id='signup_form_button' onClick={() => {
                                this.#create();
                            }}>Submit</button>
                            <img className="sign_up_logo" src={require("../../media/logo_no_name.png")} alt="Password Handler logo"/>
                        </form>

                    </div>
                </div>
            </>
            
        );
    }
}

export default CreateAdminPage;