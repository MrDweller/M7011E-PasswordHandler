import React from "react";
import Header from '../navbar/Header';

class NoPage extends React.Component {
    render() {
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} />
                <div className='nopage'>
                    <p>404</p>
                </div>
            </>
        );
    }
}

export default NoPage;