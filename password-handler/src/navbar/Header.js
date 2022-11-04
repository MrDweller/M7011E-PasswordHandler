import React from 'react';
import { Link } from "react-router-dom";

import Hamburger from './Hamburger';
import NavButtons from './NavButtons';
import UserTab from './UserTab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_buttons: [
                {id: 0, path:"/", text: "Home"},
                {id: 1, path:"/feedback", text: "Feedback"}
            ],
            usertab_buttons: [
                {id: 0, path:"/login", text: "Login"},
                {id: 1, path:"/signup", text: "Sign Up"}
            ]
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

                    <UserTab nav_buttons={this.state.usertab_buttons}/>

                    <NavButtons nav_buttons={this.state.nav_buttons}/>
                
                </div>
                
            </div>
            
        );
    }
}

export default Header;