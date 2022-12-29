import React from 'react';
import Header from '../navbar/Header';
import Popup from '../popups/Popup';
import { Navigate } from "react-router-dom";
import { readAllPasswords, readPassword } from '../backend_communication/passwords';
import { addWebsitePassword } from '../backend_communication/addWebsitePassword';

class PasswordsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwords : [],
            current_website_url: null,
            current_website_uname: null,
            current_index: null,
            website_password: null,
            currentPopup : false
        };
        this.#setPasswords();
    }

    #setPasswords() {
        readAllPasswords(this.props.login, this.props.setLogin, (passwords) => {
            this.setState({passwords : passwords})
            console.log(passwords);
        });
    }

    #render_passwords() {
        if (this.state.passwords == null) {
            return(
                <>
                
                </>
            );
        }
        return (
            this.state.passwords.map((password, index) => {
                return (
                    <div key={index}>
                        <p key={index + "." + 0}>
                            Website: {password["website_url"]}, username for the website: {password["website_uname"]} 

                        </p>
                        <button key={index + "." + 1} onClick={() => {
                            this.setState({current_website_url: password["website_url"]});
                            this.setState({current_website_uname: password["website_uname"]});
                            this.setState({current_index: index});
                            this.setState({currentPopup: "enterPassword"});
                        }}>Show password</button>
                        <div className="password_container" id={"password_container."+index} style={{display: "none"}}>
                            <div className="password" id={"password."+index}></div>
                            <button onClick={() => {navigator.clipboard.writeText(this.state.website_password)}}>Copy</button>

                        </div>
                    
                    </div>
                );
            })
        );

    }

    render() {
        if (!this.props.login.isLoggedIn() || this.props.login.isAdmin()) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({currentPopup: status});
                }} handlePassword={(password) => {
                    
                    readPassword(this.props.login, this.props.setLogin, password, this.state.current_website_url, this.state.current_website_uname, (website_password) => {
                        this.setState({website_password: website_password})
                        document.getElementById("password_container."+this.state.current_index).style.display = "block";
                        document.getElementById("password."+this.state.current_index).innerHTML = website_password;
                    })
                }} handleNewWebsitePassword={(password, website_url, website_uname)=>{
                    addWebsitePassword(this.props.login, this.props.setLogin, password, website_url, website_uname, (result) => {
                        console.log(result);
                        if (result){
                            this.#setPasswords();
                            console.log("Added password");
                        }
                    });
                }}/>

                <Header login={this.props.login} setLogin={this.props.setLogin}  pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                <div className='passwords'>
                    <h1>Passwords</h1>
                    <button onClick={() => {
                        this.setState({currentPopup: "newWebsitePassword"});
                    }}>Add Password</button>
                    {this.#render_passwords()}
                </div>
            </>
            
        );
    }
}

export default PasswordsPage;