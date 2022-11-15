import React from 'react';
import Header from '../navbar/Header';

class HomePage extends React.Component {
    render() {
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} />
                <div className='homepage'>
                    <p>
                        Password Handler

                    </p>
                </div>
            </>
            
        );
    }
}

export default HomePage;