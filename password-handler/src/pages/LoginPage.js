import React from 'react';
import Header from '../navbar/Header';

class LoginPage extends React.Component {
    render() {
        return (
            < >
                <Header />
                <div className='signup'>
                    <h1>LoginPage</h1>
                    <div className='signup_form'>
                        <form onSubmit={this.#buttonAction}>
                            <input type="text" name="uid" placeholder="Username/Email..."/> <br/>

                            <input type="text" name='pwd' placeholder='Password'/>
                        </form>
                        <button onClick={() => {
                            this.#buttonAction();
                        }}>Login </button>
                    </div>

                </div>
            </>
            
        );
    }

    #buttonAction() {
        console.log("Button pressed")
        
        
    }
}

export default LoginPage;