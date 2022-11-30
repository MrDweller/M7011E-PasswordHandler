import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './navbar/Header';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import FeedbackPage from './pages/FeedbackPage';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import PasswordsPage from './pages/PasswordsPage';

import { withHooksHOC } from "./withHooksHOC";

class App extends React.Component{
    
    render() {
        return (
            <>
                <BrowserRouter basename='/passwordhandler'>
                
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route index element={<HomePage token={this.props.token} setToken={this.props.setToken}  />} />
                        <Route path="*" element={<NoPage token={this.props.token} setToken={this.props.setToken}  />} />

                        <Route path='/feedback' element={<FeedbackPage token={this.props.token} setToken={this.props.setToken}  />} />
                        <Route path='/signup' element={<SignUpPage token={this.props.token} setToken={this.props.setToken}  />} />
                        <Route path='/login' element={<LoginPage token={this.props.token} setToken={this.props.setToken} />} />

                        <Route path='/passwords' element={<PasswordsPage token={this.props.token} setToken={this.props.setToken} />} />

                        
                    </Routes>

                </BrowserRouter>
            
            </>
        );
    }
}

export default withHooksHOC(App);