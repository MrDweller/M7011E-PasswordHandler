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

    #search() {
        readAllPasswords(this.props.login, this.props.setLogin, (passwords) => {
            let currentAmountOfPasswords = this.state.passwords.length;

            let search = document.getElementById("search").value;
            let searchedPasswords = [];
            let addedPasswords = 0;
            for (let i = 0; i < passwords.length; i++) {
                if (passwords[i]["website_url"].includes(search) || passwords[i]["website_uname"].includes(search)) {
                    searchedPasswords[addedPasswords] = passwords[i];
                    addedPasswords ++;
                }
            }
            this.setState({passwords: searchedPasswords});

            for (let i = 0; i < currentAmountOfPasswords; i++) {
                document.getElementById("password_button."+i).setAttribute("disabled", "disabled");
                document.getElementById("password."+i).innerHTML = "";

            }

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
                    <div className='password_box' key={index}>
                        <div key={index + "." + 0} className='password_box_text' >
                            <h1 key={index + "." + 0 + "." + 0} style={{width: "25%"}}>
                                Website:  

                            </h1>
                            <p key={index + "." + 0 + "." + 1} style={{width: "25%"}}>
                                {password["website_url"]}

                            </p>
                            <h1 key={index + "." + 0 + "." + 2} style={{width: "25%"}}>
                                Website user name:  

                            </h1>
                            <p key={index + "." + 0 + "." + 3} style={{width: "25%"}}>
                            {password["website_uname"]}
                                
                            </p>

                        </div>
                        <br></br>
                        <div className="password_container" id={"password_container."+index} >
                            <button key={index + "." + 1} onClick={() => {
                                this.setState({current_website_url: password["website_url"]});
                                this.setState({current_website_uname: password["website_uname"]});
                                this.setState({current_index: index});
                                this.setState({currentPopup: "enterPassword"});
                            }}>Show password</button>
                            <div className="password">
                                <p id={"password."+index}></p>
                            </div>
                            <button id={"password_button."+index} onClick={() => {
                                navigator.clipboard.writeText(document.getElementById("password."+index).innerHTML)

                            }} style={{width: "10%"}}>Copy</button>

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
                        if (website_password !== null) {
                            this.setState({website_password: website_password})
                            document.getElementById("password."+this.state.current_index).innerHTML = website_password;

                        }
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
                    <button style={{width: "30em", "borderRadius": "5em"}} onClick={() => {
                        this.setState({currentPopup: "newWebsitePassword"});
                    }}>Add Password</button> 
                    
                    <div className='searchBarContainer'>
                        <form className='searchBar' onSubmit={e => e.preventDefault()}>
                            <input  type="text" id="search" name="search" placeholder='Search for website or website username'/>
                            <button type='submit' src={require("../media/search-icon.png")} alt="search" onClick={() => {
                                this.#search();
                            }}>
                                <img src={require("../media/search-icon.png")} alt="search"/>
                            </button>
                        </form>

                    </div>


                    {this.#render_passwords()}
                </div>
            </>
            
        );
    }
}

export default PasswordsPage;