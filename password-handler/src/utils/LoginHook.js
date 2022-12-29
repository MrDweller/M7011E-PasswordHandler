import { useState } from 'react';
import LoginObject from './LoginObject';

export default function useLogin() {
    const getLogin = () => {
        let userNameString = sessionStorage.getItem('userName');
        let tokenString = sessionStorage.getItem('token');
        let loginAuthString = sessionStorage.getItem('loginAuth');
        let userName = JSON.parse(userNameString);
        let token = JSON.parse(tokenString);
        let loginAuth = JSON.parse(loginAuthString);
        return new LoginObject(userName, token, loginAuth)
    };

    const [login, setLogin] = useState(getLogin());

    const saveLogin = (loginObject) => {
        let userName = loginObject.getUname();
        let token = loginObject.getToken();
        let loginAuth = loginObject.getLoginAuth();

        if (!userName) {
            userName = null;
        }
        if (!token) {
            token = null;
        }
        if (!loginAuth) {
            loginAuth = null;
        }

        sessionStorage.setItem('userName', JSON.stringify(userName));
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('loginAuth', JSON.stringify(loginAuth));
        setLogin(loginObject);
    };

    return {
        setLogin: saveLogin,
        login
    }
}