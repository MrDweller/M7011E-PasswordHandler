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
// import ResetPasswordPage from './pages/ResetPasswordPage';

import { withHooksHOC } from "./withHooksHOC";

class App extends React.Component{
    
    render() {
        return (
            <>
                <BrowserRouter basename='/passwordhandler'>
                
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route index element={<HomePage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP} />} />
                        <Route path="*" element={<NoPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />

                        <Route path='/feedback' element={<FeedbackPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/signup' element={<SignUpPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/login' element={<LoginPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />

                        <Route path='/passwords' element={<PasswordsPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        <Route path='/user' element={<UserPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                         <Route path='/confirmIP' element={<IpConfirmPage token={this.props.token} setToken={this.props.setToken} userName={this.props.userName} setUserName={this.props.setUserName} pfp = {this.props.pfp} setPFP = {this.props.setPFP}/>} />
                        {/* <Route path='/reset-password' element={<ResetPasswordPage token={this.props.token} setToken={this.props.setToken} />}/> */}

                        
                    </Routes>

                </BrowserRouter>
            
            </>
        );
    }
}

export default withHooksHOC(App);