import React from 'react';
import Header from '../navbar/Header';
// import { newMasterPassword } from '../backend_communication/newMasterPassword';

class ResetPasswordPage extends React.Component {
    #submitNewMasterPassword() {
        // const searchParams = new URLSearchParams(document.location.search)
        // if (document.getElementById("password").value === document.getElementById("repeat_password").value) {
        //     newMasterPassword(searchParams.get('token'), document.getElementById("password").value);

        // }
        // else {
        //     console.log("not the same password");
        // }

    }

    render() {

        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} />
                {/* <div className='signup'>
                    <h1>Reset password</h1>
                    <div className='signup_form'>
                        <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="password">New password </label> <br />
                            <input type="password" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeat_password">Repeat new password </label> <br />
                            <input type="password" id="repeat_password" name="repeat_password" placeholder='Repeat new password...' /> <br />
                            <button id='login_form_button' onClick={() => {
                                return this.#submitNewMasterPassword();
                            }}>Submit</button>

                            <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo" />
                        </form>

                    </div>
                </div> */}
            </>
        );
    }
}

export default ResetPasswordPage;