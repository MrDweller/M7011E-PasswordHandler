import React from 'react';
import usePFP from './usePFP';
import useLogin from './utils/LoginHook';

export const withHooksHOC = (Component) => () => {
    const { login, setLogin } = useLogin();
    const {pfp, setPFP} = usePFP();

    return <Component login={login} setLogin={setLogin} pfp = {pfp} setPFP = {setPFP}/>;
}
