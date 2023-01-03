import React from 'react';
import Header from '../../navbar/Header';
import { Navigate } from "react-router-dom";
import { createAdmin } from '../../backend_communication/Admin/createAdmin';
import { isValidEmail } from '../../errorChecks';
import Popup from '../../popups/Popup';

class CreateAdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            currentPopup: null,
            infoHeader: "",
            infoText: "",
            navigate: null
        }
    }

    #create() {
        if (!isValidEmail(document.getElementById("email").value)) {
            this.setState({status: "notValidEmail"});
        }
        else {
            createAdmin(this.props.login, this.props.setLogin, document.getElementById("uname").value, document.getElementById("email").value, (statusCode) => {
                switch(statusCode) {
                    case ("SUCCESS"):
                        this.setState({infoHeader: "Success!"});
                        this.setState({infoText: "The admin was successfully created!"});
                        this.setState({currentPopup: "info"});
                        break;

                    case ("SUCCESS_EMAIL"):
                        this.setState({infoHeader: "Success!"});
                        this.setState({infoText: "The admin was successfully created and they where sent an completion email!"});
                        this.setState({currentPopup: "info"});
                        break;
                    
                    default:
                        this.setState({status: statusCode});
                        break;
                }
            });

        }

    }

    #renderStatus() {
        switch(this.state.status) {
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

    #navigation() {
        switch (this.state.navigate) {
            case ("HOME"):
                return (
                    <Navigate to={"/"} />
                );

            default:
                break;
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
                {this.#navigation()}
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({currentPopup: status});
                }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {
                    this.setState({navigate: "HOME"});
                }}/>

                <Header login={this.props.login} setLogin={this.props.setLogin}  />
                <div className='signup'>
                    <h1>Create admin</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="uname">Username </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='Username..' /> <br />
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="email" id="email" name="email" placeholder='Email...' /> <br />
                            {this.#renderStatus()}
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