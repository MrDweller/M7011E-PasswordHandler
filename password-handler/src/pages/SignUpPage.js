import React from 'react';
import Header from '../navbar/Header';

class SignUpPage extends React.Component {
    #signUp() {
        console.log("submit!");
        console.log( document.getElementById("email").value );
        console.log( document.getElementById("uname").value );
        console.log( document.getElementById("password").value );
        console.log( document.getElementById("repeate_assword").value );
    
        
    }

    render() {
        return (
            < >
                <Header />
                <div className='signup'>
                    <h1>Sign Up</h1>
                    <div className='signup_form'>
                        <form>
                            <label htmlFor="fname">Email </label> <br/> 
                            <input type="text" id="email" name="email" placeholder='Email...' /> <br />
                            <label htmlFor="uname">User name </label> <br />
                            <input type="text" id="uname" name="uname" placeholder='User name..' /> <br />
                            <label htmlFor="password">Password </label> <br />
                            <input type="text" id="password" name="password" placeholder='Password...' /> <br />
                            <label htmlFor="repeate_assword">Repeate Password </label> <br />
                            <input type="text" id="repeate_assword" name="repeate_assword" placeholder='Repeate password...' /> <br />
                        </form>
                        <button id='signup_form_button' onClick={() => {
                            this.#signUp();
                        }}>Submit</button>
                        <img className="sign_up_logo" src={require("../media/logo_no_name.png")} alt="Password Handler logo"/>

                    </div>
                </div>
            </>
            
        );
    }
}

export default SignUpPage;