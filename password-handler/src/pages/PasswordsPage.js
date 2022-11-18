import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { readAllPasswords, readPassword } from '../backend_communication/passwords';

class PasswordsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwords : []
        };
        readAllPasswords(this.props.token, (passwords) => {
            this.setState({passwords : passwords})
            console.log(passwords);
        });
    }

    #render_passwords() {
        return (
            this.state.passwords.map((password, index) => {
                return (
                        <div key={index}>
                            <p key={index + "." + 0}>
                                {password["website_url"]}: {password["website_uname"]} 
                            
                            </p>
                            <button key={index + "." + 1} onClick={() => {
                                // TODO: ask for pwd
                            }}>Show password</button>
                        
                        </div>
                );
            })
        );

    }

    render() {
        if (this.props.token === null) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} />
                <div className='passwords'>
                    <p>Passwords</p>
                    {this.#render_passwords()}
                </div>
            </>
            
        );
    }
}

export default PasswordsPage;