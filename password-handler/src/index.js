import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.css';

import Header from './navbar/Header';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import FeedbackPage from './pages/FeedbackPage';
import PropTypes from 'prop-types';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import useToken from './useToken';





export default function App() {
    const {token, setToken} = useToken();
    return (
        <BrowserRouter basename='/passwordhandler'>
        
            <Routes>
                <Route path="/" element={<Header/>} />
                <Route index element={<HomePage />} />
                <Route path="*" element={<NoPage/>} />

                <Route path='/feedback' element={<FeedbackPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage setToken ={setToken} token = {token} />} />

                
            </Routes>

        </BrowserRouter>


    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
