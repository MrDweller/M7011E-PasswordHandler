import React from 'react';
import { Link } from "react-router-dom";

class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_buttons : props.nav_buttons,
            is_open : false
        };
    }

    #render_nav_buttons() {
        return (
            this.state.nav_buttons.map(nav_button => {
                return (
                    <Link key={nav_button.id} to={nav_button.path}  style={{textDecoration: 'none'}}>
                        <button className='hamburger_nav_button'>
                            {nav_button.text}

                        </button>
                    </Link>
                );
            })
        );
    }


    render() {
        return (
            <div className='hamburger'>
                <img className="hamburger_img" src={require("../media/hamburger_icon.png")} alt="Navigation button" />
                
                <div className='hamburger_drop_down'>
                    {this.#render_nav_buttons()}
                </div>
                
            </div>
            
        );
    }
}

export default Hamburger;