import React from 'react';
import Header from '../../navbar/Header';
import { addAdminPassword } from '../../backend_communication/Admin/addAdminPassword';
import axios from 'axios';

class CompleteAdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    #complete() {
        if (document.getElementById("password").value !== document.getElementById("repeat_password").value)
        {
            this.setState({error: "diffPwd"});
            return;
            
        }

        const searchParams = new URLSearchParams(document.location.search);
        console.log(searchParams.get("token"));
        let uname = searchParams.get("uname");
        let email_token = searchParams.get("token");

        let completeCallback = (userIP) => {
            addAdminPassword(this.props.setLogin, uname, email_token, document.getElementById("password").value, userIP, (errorCode) => {
                this.setState({ error: errorCode });
            });

        }

        axios.get("https://geolocation-db.com/json/").then(function (response) {
            let userIP = response.data["IPv4"];
            completeCallback(userIP);

        });

    }

    #renderError() {
        switch (this.state.error) {
            case ("diffPwd"):
                return (
                    <>
                        <p style={{ color: "red" }}>The passwords are different!</p>
                    </>
                );


            case ("UNAME_TAKEN"):
                return (
                    <>
                        <p style={{ color: "red" }}>That username is taken!</p>
                    </>
                );

            case ("EMAIL_TAKEN"):
                return (
                    <>
                        <p style={{ color: "red" }}>That email is taken!</p>
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
        return (
            < >
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