import React from 'react';
import Header from '../navbar/Header';

class FeedbackPage extends React.Component {
    render() {
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} />
                <div className='feedback'>
                    <p>Feedback page</p>
                </div>
            </>
            
        );
    }
}

export default FeedbackPage;