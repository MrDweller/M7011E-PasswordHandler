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
                <button style={{float: "right"}} onClick={() => {
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

    #forgotPassword_popup() {
        return (
            <>
                <button style={{float: "right"}} onClick={() => {
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

            case "forgotPassword":
                return (
                    <div className='popup'>
                        <div className='popup_container'>
                            {this.#forgotPassword_popup()}

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