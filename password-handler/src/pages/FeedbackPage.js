import React from 'react';
import Header from '../navbar/Header';

class FeedbackPage extends React.Component {
    render() {
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                <div className='feedback'>
                    <p>Feedback page</p>
                </div>
            </>
            
        );
    }
}

export default FeedbackPage;