import React from 'react';
import { getUsers } from '../../backend_communication/Admin/getUsers';
import Header from '../../navbar/Header';
import Popup from '../../popups/Popup';
import { Navigate } from 'react-router';
import { adminDeleteUser } from '../../backend_communication/Admin/adminDeleteUser';

class AdminUsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            infoHeader: null,
            infoText: null,
            currentUser: {
                uname: "",
                email: ""
            },
            currentPopup : false
        }
    }

    #render_users() {
        if (!this.state.users) {
            return (
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
                            return (
                                <div key={user.uname} className="usersListRow" >
                                    <div className='usersListObject'>
                                        {user.uname}
                                    </div>
                                    <div className='usersListObject'>
                                        {user.email}
                                    </div>
                                    <button onClick={() => {
                                        this.setState({currentUser: {
                                            uname: user.uname,
                                            email: user.email
                                        }});
                                        this.setState({currentPopup: "enterPassword"});
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
        if (!this.state.users) {
            getUsers(this.props.login, this.props.setLogin, (response) => {
                console.log("response:" + response);
                this.setState({ users: response });
            });
        }
        return (
            < >
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({currentPopup: status});
                }} handlePassword={(password) => {
                    adminDeleteUser(this.state.currentUser.uname, false, this.props.login, this.props.setLogin, password, (result) => {
                        if (result === true) {
                            getUsers(this.props.login, this.props.setLogin, (response) => {
                                console.log("response:" + response);
                                this.setState({ users: response });
                            });

                        }
                        else if (result === 401) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "Wrong password!"});
                            this.setState({currentPopup: "info"});
                        }
                    });
                }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {

                }} />
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                {this.#render_users()}

            </>

        );
    }
}

export default AdminUsersPage;