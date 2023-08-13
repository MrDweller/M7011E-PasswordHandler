import React from 'react';
import Header from '../../navbar/Header';
import { addAdminPassword } from '../../backend_communication/Admin/addAdminPassword';
import axios from 'axios';
import Popup from '../../popups/Popup';
import { Navigate } from 'react-router-dom';

class CompleteAdminPage extends React.Component {
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

    #complete() {
        if (!document.getElementById("password").value || !document.getElementById("repeat_password").value) {
            this.setState({status: "EMPTY_FIELDS"});
            return;
        }
        if (document.getElementById("password").value !== document.getElementById("repeat_password").value)
        {
            this.setState({status: "diffPwd"});
            return;
            
        }

        const searchParams = new URLSearchParams(document.location.search);
        let uname = searchParams.get("uname");
        let email_token = searchParams.get("token");

        this.setState({ status: null });
        let completeCallback = (userIP) => {
            addAdminPassword(this.props.setLogin, uname, email_token, document.getElementById("password").value, userIP, (statusCode) => {
                switch (statusCode) {
                    case (200):
                        this.setState({infoHeader: "Success!"});
                        this.setState({infoText: "Your account has been completed! Do you want to login?"});
                        this.setState({currentPopup: "info"});
                        break;

                    default:
                        this.setState({ status: statusCode });
                        break;

                }
            });

        }

        axios.get("https://geolocation-db.com/json/").then(function (response) {
            let userIP = response.data["IPv4"];
            completeCallback(userIP);

        });

    }

    #renderError() {
        switch (this.state.status) {
            case (403):
                return (
                    <>
                        <p style={{ color: "red" }}>Password creation failed</p>
                    </>
                );
            
            case ("EMPTY_FIELDS"):
                return (
                    <>
                        <p style={{ color: "red" }}>Some feilds are empty</p>
                    </>
                );
            
            case ("diffPwd"):
                return (
                    <>
                        <p style={{color: "red"}}>The passwords are different!</p>
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
            case ("LOGIN"):
                return (
                    <Navigate to={"/admin/login"} />
                );

            default:
                break;
        }
    
    }

    render() {
        return (
            < >
                {this.#navigation()}
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({currentPopup: status});
                }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {
                    this.setState({navigate: "LOGIN"});
                }}/>

                <Header login={this.props.login} setLogin={this.props.setLogin} />
                <div className='signup'>
                    <h1>Create admin</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="password">Password </label> <br />
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeat_password">Repeat Password </label> <br />
                            <input type="password" id="repeat_password" name="repeat_password" placeholder='Repeat password...' /> <br />
                            {this.#renderError()}
                            <button type="submit" id='signup_form_button' onClick={() => {
                                this.#complete();
                            }}>Submit</button>
                            <img className="sign_up_logo" src={require("../../media/logo_no_name.png")} alt="Password Handler logo" />
                        </form>

                    </div>
                </div>
            </>

        );
    }
}

export default CompleteAdminPage;