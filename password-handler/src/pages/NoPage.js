import React from "react";
import Header from '../navbar/Header';

class NoPage extends React.Component {
    render() {
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfpURL = {this.props.pfpURL} setPFP = {this.props.setPFP} />
                <div className='nopage'>
                    <p>404</p>
                </div>
            </>
        );
    }
}

export default NoPage;