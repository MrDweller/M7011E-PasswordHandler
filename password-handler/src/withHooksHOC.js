import React from 'react';
import useLogin from './utils/LoginHook';

export const withHooksHOC = (Component) => () => {
    const { login, setLogin } = useLogin();

    return <Component login={login} setLogin={setLogin} />;
}
