import React from 'react';
import Header from '../navbar/Header';
import { Navigate } from "react-router-dom";

class UserPage extends React.Component {
    render() {
        if (this.props.token === null) {
            return (
                <Navigate to={"/"} />
            );
        }
        return (
            < >
                <Header token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} />
                <div className='userpage'>
                    <button>Change password..</button>
                    <button>Change Username..</button>
                </div>
            </>
        );
    }
}

export default UserPage;