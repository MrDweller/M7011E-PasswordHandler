import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    #enterPassword_popup() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>Enter Password</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="password">Password </label> <br />
                        <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                        <button id='enter_password_button' onClick={() => {
                            this.props.handlePassword(document.getElementById("password").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    #newWebsitePassword_popup() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>New Website Password</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="password">Password </label> <br />
                        <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                        <label htmlFor="website_url">Website URL </label> <br />
                        <input type="text" id="website_url" name="website_url" placeholder='Website url...' /> <br />
                        <label htmlFor="website_uname">Website Username </label> <br />
                        <input type="text" id="website_uname" name="website_uname" placeholder='Website username...' /> <br />
                        <button id='enter_password_button' onClick={() => {
                            this.props.handleNewWebsitePassword(document.getElementById("password").value, document.getElementById("website_url").value, document.getElementById("website_uname").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    #forgotPassword_popup() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>Enter email</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="email"> Email </label> <br />
                        <input type="email" id="email" name="email" placeholder='Email...' /> <br />
                        <button id='enter_email_button' onClick={() => {
                            this.props.handleEmail(document.getElementById("email").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    #newMasterPassword_popup() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>New Password</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="password">Old Password </label> <br />
                        <input type="password" id="password" name="password" placeholder='Old Password...' /> <br />
                        <label htmlFor="new_password">New Password </label> <br />
                        <input type="password" id="new_password" name="new_password" placeholder='New Password...' /> <br />
                        <label htmlFor="new_password2">Repete new Password </label> <br />
                        <input type="password" id="new_password2" name="new_password2" placeholder='Repete new Password...' /> <br />
                        <button id='enter_password_button' onClick={() => {
                            this.props.handleNewMasterPassword(document.getElementById("password").value, document.getElementById("new_password").value, document.getElementById("new_password2").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    #newEmail() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>New Email</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="email">Email </label> <br />
                        <input type="email" id="email" name="email" placeholder='Email...' /> <br />
                        <button id='enter_email' onClick={() => {
                            this.props.handleNewEmail(document.getElementById("email").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    #newUname() {
        return (
            <>
                <button style={{ float: "right" }} onClick={() => {
                    this.props.setCurrentPopup(null);
                }}>x</button>
                <div className='popup_form'>
                    <h1>New Username</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label htmlFor="unam">Username </label> <br />
                        <input type="text" id="uname" name="uname" placeholder='Username...' /> <br />
                        <button id='enter_uname' onClick={() => {
                            this.props.handleNewUname(document.getElementById("uname").value);
                            this.props.setCurrentPopup();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                    </form>

                </div>

            </>

        );
    }

    render() {
        switch (this.props.currentPopup) {
            case "enterPassword":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#enterPassword_popup()}

                        </div>

                    </div>

                );

            case "newWebsitePassword":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#newWebsitePassword_popup()}

                        </div>

                    </div>

                );

            case "forgotPassword":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#forgotPassword_popup()}

                        </div>

                    </div>

                );

            case "newMasterPassword":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#newMasterPassword_popup()}

                        </div>

                    </div>

                );

            case "newEmail":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#newEmail()}

                        </div>

                    </div>

                );

            case "newUname":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#newUname()}

                        </div>

                    </div>

                );

            default:
                return (
                    <>
                    </>
                );
        }
    }
}

export default Popup;