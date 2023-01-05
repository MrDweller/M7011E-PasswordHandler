import React from 'react';
import { getAdmins } from '../../backend_communication/Admin/getAdmins';
import Header from '../../navbar/Header';
import { Navigate } from 'react-router';
import { adminDeleteUser } from '../../backend_communication/Admin/adminDeleteUser';

class SuperAdminAdminsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: null
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
                adminDeleteUser(admin.uname, true, this.props.login, this.props.setLogin, (result) => {
                    if (result) {
                        getAdmins(this.props.login, this.props.setLogin, (response) => {
                            console.log("response:" + response);
                            this.setState({ admins: response });
                        });

                    }
                });
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
                console.log("response:" + response);
                this.setState({ admins: response });
            });
        }
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                {this.#render_admins()}

            </>

        );
    }
}

export default SuperAdminAdminsPage;