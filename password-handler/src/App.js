import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './navbar/Header';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import FeedbackPage from './pages/FeedbackPage';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import PasswordsPage from './pages/PasswordsPage';
import UserPage from './pages/UserPage';
import IpConfirmPage from './pages/IpConfirmPage';

import CreateAdminPage from './pages/Admin/CreateAdminPage';
import CompleteAdminPage from './pages/Admin/CompleteAdminPage';

import { withHooksHOC } from "./withHooksHOC";
import AdminUsersPage from './pages/Admin/AdminUsersPage';
import SuperAdminAdminsPage from './pages/Admin/SuperAdminAdminsPage';

class App extends React.Component {
    render() {
        console.log(this.props.login);
        return (
            <>
                <BrowserRouter basename='/passwordhandler'>

                    <Routes>

                        <Route path="/" element={<Header />} />
                        <Route index element={<HomePage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path="*" element={<NoPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />

                        <Route path='/feedback' element={<FeedbackPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/signup' element={<SignUpPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/login' element={<LoginPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />

                        <Route path='/passwords' element={<PasswordsPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/user' element={<UserPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/confirmIP' element={<IpConfirmPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        {/* <Route path='/reset-password' element={<ResetPasswordPage token={this.props.token} setToken={this.props.setToken} />}/> */}
                        
                        {/* Admin */}
                        <Route path='/admin/login' element={<LoginPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP} isAdmin={true} />} />
                        <Route path='/admin/create' element={<CreateAdminPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/admin/complete' element={<CompleteAdminPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/admin/users' element={<AdminUsersPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP} />} />
                        <Route path='/admin/admins' element={<SuperAdminAdminsPage login={this.props.login} setLogin={this.props.setLogin} pfp = {this.props.pfp} setPFP = {this.props.setPFP} />} />

                        {/* ----- */}
                    </Routes>

                </BrowserRouter>

            </>
        );
    }
}

export default withHooksHOC(App);