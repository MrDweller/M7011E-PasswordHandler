import React from 'react';
import Header from '../navbar/Header';

import '../../node_modules/video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class HomePage extends React.Component {
    render() {
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} />
                <div className='homepage'>
                    <p>Password Handler</p>
                    <h1>Title</h1>
                        <div className='video'>
                            <Player playsInline fluid={false} width={854} height={480}>
                                <source src={require("../media/quarantine_is_over.mp4")} />
                                <BigPlayButton position="center" />
                            </Player>
                        </div>

                </div>
            </>
        );
    }
}

export default HomePage;