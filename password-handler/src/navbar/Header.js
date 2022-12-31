import React from 'react';
import { Link } from "react-router-dom";

import Hamburger from './Hamburger';
import NavButtons from './NavButtons';
import UserTab from './UserTab';

import { logout } from '../backend_communication/logout';
import LoginAuthority from '../utils/LoginAuthority';

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
                    id: 0, path: "/login", text: () => { return "Login"; }, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/signup", text: () => { return "Sign Up"; }, onClickCallback: () => {

                    }
                }
            ],
            usertab_buttons_user_logged_in: [
                {
                    id: 0, path: "/passwords", text: () => { return "Passwords"; }, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/user", text: () => this.props.login.getUname(), onClickCallback: () => {

                    }
                },
                {
                    id: 2, path: "/", text: () => { return "Logout"; }, onClickCallback: () => {
                        logout(this.props.login, this.props.setLogin);

                    }
                }

            ],
            admintab_buttons_user_logged_in: [
                {
                    id: 0, path: "/admin/users", text: () => { return "Users"; }, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/user", text: () => this.props.login.getUname(), onClickCallback: () => {

                    }
                },
                {
                    id: 2, path: "/", text: () => { return "Logout"; }, onClickCallback: () => {
                        logout(this.props.login, this.props.setLogin);

                    }
                }

            ],
            superAdmintab_buttons_user_logged_in: [
                {
                    id: 0, path: "/admin/create", text: () => { return "Create"; }, onClickCallback: () => {

                    }
                },
                {
                    id: 1, path: "/admin/admins", text: () => { return "Admins"; }, onClickCallback: () => {

                    }
                }, 
                {
                    id: 2, path: "/admin/users", text: () => { return "Users"; }, onClickCallback: () => {

                    }
                },
                {
                    id: 3, path: "/user", text: () => this.props.login.getUname(), onClickCallback: () => {

                    }
                },
                {
                    id: 4, path: "/", text: () => { return "Logout"; }, onClickCallback: () => {
                        logout(this.props.login, this.props.setLogin);

                    }
                }
            ],
            userTabChange: false
        }


    }

    #render_usertab() {
        if (this.props.login.getToken() != null) {
            if (LoginAuthority.isAdmin(this.props.login.getLoginAuth())) {
                if (this.props.login.isSuperAdmin()) {
                    return (
                        <>
                            <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.superAdmintab_buttons_user_logged_in} />
    
                        </>
    
                    );
                }
                return (
                    <>
                        <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.admintab_buttons_user_logged_in} />

                    </>

                );
            }
            return (
                <>
                    <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.usertab_buttons_user_logged_in} pfp={this.props.pfp} setPFP={this.props.setPFP} loggedIn={true} />

                </>

            );
        }
        else {

            return (
                <UserTab userTabChange={this.state.userTabChange} nav_buttons={this.state.usertab_buttons_not_logged_in} pfp={this.props.pfp} loggedIn={false} />
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