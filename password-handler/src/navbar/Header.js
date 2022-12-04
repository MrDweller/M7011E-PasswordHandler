import React from 'react';
import { Link } from "react-router-dom";

import Hamburger from './Hamburger';
import NavButtons from './NavButtons';
import UserTab from './UserTab';
import { getUserName } from '../backend_communication/getUserName';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            nav_buttons: [
                { id: 0, path: "/", text: "Home" },
                { id: 1, path: "/feedback", text: "Feedback" }
            ],
            usertab_buttons_not_logged_in: [
                {
                    id: 0, path: "/login", text: ()=>{return "Login";}, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/signup", text: ()=>{return "Sign Up";}, onClickCallback: () => {

                    }
                }
            ],
            usertab_buttons_user_logged_in: [
                {
                    id: 0, path: "/passwords", text: ()=>{return "Passwords";}, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/user", text: () => this.getUserName(), onClickCallback: () => {

                    }
                },
                {
                    id: 2, path: "/", text: ()=>{return "Logout";}, onClickCallback: () => {
                        console.log("LOGOUT ");
                        this.props.setToken(null);

                    }
                }

            ],
            userTabChange: false
        }


    }

    getUserName() {
        getUserName(this.props.token, this.props.setToken, this.props.setUserName);
        return this.props.userName;
    }

    #render_usertab() {
        if (this.props.token != null) {
            
            return (
                <>
                    <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.usertab_buttons_user_logged_in} />

                </>

            );
        }
        else {
            return (
                <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.usertab_buttons_not_logged_in} />
            );
        }

    }

    render() {
        
        return (
            <div className='header'>
                <div className='row'>
                    <Hamburger nav_buttons={this.state.nav_buttons} />

                    <div className='logo'>
                        <Link to="/">
                            <img className="logo_img" src={require("../media/logo_and_name.png")} alt="Password Handler logo" />
                        </Link>

                    </div>

                    {this.#render_usertab()}


                    <NavButtons nav_buttons={this.state.nav_buttons} />

                </div>

            </div>

        );
    }
}

export default Header;