import React from 'react';
import { Link } from "react-router-dom";

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_buttons : props.nav_buttons
        };
    }

    #render_nav_buttons() {
        return (
            this.state.nav_buttons.map(nav_button => {
                return (
                    <Link key={nav_button.id} to={nav_button.path} style={{textDecoration: 'none'}}>
                        <button className='nav_button'>
                            {nav_button.text}

                        </button>
                    </Link>
                );
            })
        );
    }

    render() {
        return (
            <div className='nav_buttons'>
                { this.#render_nav_buttons() }
                
            </div>
            
        );
    }
}

export default NavButtons;