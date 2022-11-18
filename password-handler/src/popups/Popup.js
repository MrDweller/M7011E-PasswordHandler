import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPopup: this.props.popup
        };
    }

    #enterPassword_popup() {
        return (
            <p>enterPassword</p>
        );
    }

    render() {
        switch (this.state.currentPopup) {
            case "enterPassword":
                return(
                    <div className='popup'>
                        {this.#enterPassword_popup()}

                    </div>

                );
            
            default:
                return(
                    <>
                        <p>
                            What
                        </p>
                    </>
                );
        }
    }
}

export default Popup;