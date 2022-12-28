import { useState } from 'react';

export default function useLoginAuth() {
  const getLoginAuth = () => {
    const loginAuthString = sessionStorage.getItem('loginAuth');
    const loginAuth = JSON.parse(loginAuthString);
    return loginAuth
  };

  const [loginAuth, setLoginAuth] = useState(getLoginAuth());

  const saveLoginAuth = loginAuth => {
    if(!loginAuth) {
        loginAuth = null;
    }
    sessionStorage.setItem('loginAuth', JSON.stringify(loginAuth));
    setLoginAuth(loginAuth);
  };

  return {
    setLoginAuth: saveLoginAuth,
    loginAuth
  }
}