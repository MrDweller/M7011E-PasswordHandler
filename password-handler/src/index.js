import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.css';

import Header from './navbar/Header';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import FeedbackPage from './pages/FeedbackPage';



export default function App() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Header/>} />
                <Route index element={<HomePage />} />
                <Route path="*" element={<NoPage/>} />

                <Route path='/feedback' element={<FeedbackPage />} />
                
            </Routes>

        </BrowserRouter>


    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
