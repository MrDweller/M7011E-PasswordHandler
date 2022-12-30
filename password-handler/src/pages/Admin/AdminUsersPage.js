import React from 'react';
import { getUsers } from '../../backend_communication/Admin/getUsers';
import Header from '../../navbar/Header';
import { Navigate } from 'react-router';
import { adminDeleteUser } from '../../backend_communication/Admin/adminDeleteUser';

class AdminUsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    #render_users() {
        if (!this.state.users){
            return(
                <>
                </>
            );
        }
        return (
            <div className='users'>
                <h1>Users</h1>
                <div className='usersListContainer'>
                    {
                        this.state.users.map(user => {
                            return(
                                <div key={user.uname} className="usersListRow" >
                                    <div className='usersListObject'>
                                        {user.uname}
                                    </div>
                                    <div className='usersListObject'>
                                        {user.email}
                                    </div>
                                    <button onClick={() => {
                                        adminDeleteUser(user.uname, false, this.props.login, this.props.setLogin, (result) => {
                                            if (result) {
                                                getUsers(this.props.login, this.props.setLogin, (response) => {
                                                    console.log("response:" + response);
                                                    this.setState({users: response});
                                                });
                                                
                                            }
                                        });
                                    }}>
                                        DELETE
                                    </button>
                                </div>
                            )
                        })

                    }

                </div>
            
            </div>
        );

    }

    render() {
        if (!this.props.login.isAdmin()) {
            return (
                <Navigate to={"/"} />
            );
        }
        if (!this.state.users){
            getUsers(this.props.login, this.props.setLogin, (response) => {
                console.log("response:" + response);
                this.setState({users: response});
            });
        }
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                {this.#render_users()}
                
            </>

        );
    }
}

export default AdminUsersPage;