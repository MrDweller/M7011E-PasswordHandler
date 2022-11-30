import React from 'react';
import Header from '../navbar/Header';

class ResetPasswordPage extends React.Component {
    render() {
        const searchParams = new URLSearchParams(document.location.search)
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} />
                {searchParams.get('token')}
            </>
        );
    }
}

export default ResetPasswordPage;