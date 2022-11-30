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
            current_website_url: null,
            current_website_uname: null,
            current_index: null,
            website_password: null,
            enterPassword : false
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
                            this.setState({current_website_url: password["website_url"]});
                            this.setState({current_website_uname: password["website_uname"]});
                            this.setState({current_index: index});
                            this.setState({enterPassword: "enterPassword"});
                        }}>Show password</button>
                        <div class="password_container" id={"password_container."+index} style={{display: "none"}}>
                            <div class="password" id={"password."+index}></div>
                            <button onClick={() => {navigator.clipboard.writeText(this.state.website_password)}}>Copy</button>

                        </div>
                    
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
                    
                    readPassword(this.props.token, password, this.state.current_website_url, this.state.current_website_uname, (website_password) => {
                        this.setState({website_password: website_password})
                        document.getElementById("password_container."+this.state.current_index).style.display = "block";
                        document.getElementById("password."+this.state.current_index).innerHTML = website_password;
                    })
                }}/>

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