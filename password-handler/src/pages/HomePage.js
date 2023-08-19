import React from 'react';
import Header from '../navbar/Header';

import '../../node_modules/video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class HomePage extends React.Component {
    render() {
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                <div className='homepage'>
                    <h1>
                        Password Handler
                    </h1>
                    <p>Welcome to Password Handler! A secure way to generate and save passwords.</p>
                    <p>
                        Please try our add on. <a href={`${process.env.PUBLIC_URL}/addon/54feaf529b684d70af2c-1.0.xpi`}>Password Handler add on </a> </p>
                    <p>
                        It can automatically enter your passwords to your various website accounts.
                    </p>

                    <img className="homepage_logo" src={require("../media/logo.png")} alt="logo" />

                    <h1>Tutorial for new users</h1>
                        <div className='video'>
                            <Player playsInline fluid={false} width={854} height={480}>
                                <source src={require("../media/PasswordHandler_Tutorial.mp4")} />
                                <BigPlayButton position="center" />
                            </Player>
                        </div>

                </div>
            </>
        );
    }
}

export default HomePage;