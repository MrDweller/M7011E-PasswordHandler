import React from 'react';
import { Link } from "react-router-dom";

import Hamburger from './Hamburger';
import NavButtons from './NavButtons';
import UserTab from './UserTab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            nav_buttons: [
                {id: 0, path:"/", text: "Home"},
                {id: 1, path:"/feedback", text: "Feedback"}
            ],
            usertab_buttons_not_logged_in: [
                {id: 0, path:"/login", text: "Login", onClickCallback:()=>{

                }},
                {id: 1, path:"/signup", text: "Sign Up",onClickCallback:()=>{

                }}
            ],
            usertab_buttons_user_logged_in: [
                {id: 0, path:"/passwords", text: "Passwords", onClickCallback:()=>{

                }},
                {id: 1, path:"/", text: "Logout", onClickCallback:() =>{
                    console.log("LOGOUT ");
                    this.props.setToken(null);
                    
                }}

            ]
        }

    }

    #render_usertab() {
        if (this.props.token != null)
        {
            return (
                <>
                    <p style={{display: 'none'}}>
                        {this.props.token}

                    </p>
                    <UserTab nav_buttons={this.state.usertab_buttons_user_logged_in}/>
                
                </>
                
            );
        }
        else {
            return (
                <UserTab  nav_buttons={this.state.usertab_buttons_not_logged_in}/>
            );
        }
        
    }

    render() {

        return (
            <div className='header'>
                <div className='row'>
                    <Hamburger nav_buttons={this.state.nav_buttons}/>

                    <div className='logo'>
                        <Link to="/">
                            <img className="logo_img" src={require("../media/logo_and_name.png")} alt="Password Handler logo"/>
                        </Link>

                    </div>

                    {this.#render_usertab()}
                    

                    <NavButtons nav_buttons={this.state.nav_buttons}/>
                
                </div>
                
            </div>
            
        );
    }
}

export default Header;