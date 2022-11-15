import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.css';

import Header from './navbar/Header';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import FeedbackPage from './pages/FeedbackPage';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';


export default function App() {
    return (
        <BrowserRouter basename='/passwordhandler'>
        
            <Routes>
                <Route path="/" element={<Header/>} />
                <Route index element={<HomePage />} />
                <Route path="*" element={<NoPage/>} />

                <Route path='/feedback' element={<FeedbackPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />

                
            </Routes>

        </BrowserRouter>


    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
