import React from 'react';
import Header from '../navbar/Header';

class FeedbackPage extends React.Component {
    render() {
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>
                <div className='feedback'>
                    <p>Feedback page</p>
                </div>
            </>
            
        );
    }
}

export default FeedbackPage;