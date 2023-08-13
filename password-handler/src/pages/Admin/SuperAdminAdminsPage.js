import React from 'react';
import { getAdmins } from '../../backend_communication/Admin/getAdmins';
import Header from '../../navbar/Header';
import { Navigate } from 'react-router';
import Popup from '../../popups/Popup';
import { adminDeleteUser } from '../../backend_communication/Admin/adminDeleteUser';

class SuperAdminAdminsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: null,
            infoHeader: null,
            infoText: null,
            currentAdmin: {
                uname: "",
                email: ""
            },
            currentPopup : false
        }
    }

    #render_isSuperAdmin(admin) {
        if (admin.isSuperAdmin) {
            return (
                <div className='usersListObject'>
                    SUPER ADMIN
                </div>
            )
        }
        return (
            <button onClick={() => {
                this.setState({currentAdmin: {
                    uname: admin.uname,
                    email: admin.email
                }});
                this.setState({currentPopup: "enterPassword"});
            }}>
                DELETE
            </button>
        );
    }

    #render_admins() {
        if (!this.state.admins) {
            return (
                <>
                </>
            );
        }
        return (
            <div className='users'>
                <h1>Admins</h1>
                <div className='usersListContainer'>
                    {
                        this.state.admins.map(admin => {
                            return (
                                <div key={admin.uname} className="usersListRow" >
                                    <div className='usersListObject'>
                                        {admin.uname}
                                    </div>
                                    <div className='usersListObject'>
                                        {admin.email}
                                    </div>
                                    {this.#render_isSuperAdmin(admin)}
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        );

    }

    render() {
        if (!this.props.login.isSuperAdmin()) {
            return (
                <Navigate to={"/"} />
            );
        }
        if (!this.state.admins) {
            getAdmins(this.props.login, this.props.setLogin, (response) => {
                this.setState({ admins: response });
            });
        }
        return (
            < >
                <Popup currentPopup={this.state.currentPopup} setCurrentPopup={(status) => {
                    this.setState({currentPopup: status});
                }} handlePassword={(password) => {
                    adminDeleteUser(this.state.currentAdmin.uname, true, this.props.login, this.props.setLogin, password, (result) => {
                        if (result === true) {
                            getAdmins(this.props.login, this.props.setLogin, (response) => {
                                this.setState({ admins: response });
                            });
    
                        }
                        else if (result === 401) {
                            this.setState({infoHeader: "Something went wrong!"});
                            this.setState({infoText: "Wrong password!"});
                            this.setState({currentPopup: "info"});
                        }
                    });
                }} infoHeader={this.state.infoHeader} infoText={this.state.infoText} handleInfo={() => {

                }}  />
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                {this.#render_admins()}

            </>

        );
    }
}

export default SuperAdminAdminsPage;