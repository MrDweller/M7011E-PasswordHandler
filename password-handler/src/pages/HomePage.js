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