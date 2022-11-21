import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { readAllPasswords, readPassword } from '../backend_communication/passwords';

class PasswordsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwords : [],
            currnet_website_url: null,
            current_website_uname: null,
            enterPassword : false,
            website_password: null
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
                                this.setState({currnet_website_url: password["website_url"]});
                                this.setState({current_website_uname: password["website_uname"]});
                                this.setState({enterPassword: "enterPassword"});
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
                <Popup currentPopup={this.state.enterPassword} setCurrentPopup={(status) => {
                    this.setState({enterPassword: status});
                }} handlePassword={(password) => {
                    readPassword(this.props.token, password, this.state.currnet_website_url, this.state.current_website_uname, (website_password) => {
                        this.setState({website_password: website_password})
                    })
                }}/>

                <Header token={this.props.token} setToken={this.props.setToken} />
                <div className='passwords'>
                    <p>Passwords</p>
                    {this.#render_passwords()}
                </div>
                <p style={{textAlign: "center"}} >{this.state.website_password}</p>
            </>
            
        );
    }
}

export default PasswordsPage;