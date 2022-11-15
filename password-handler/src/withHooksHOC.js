import React from 'react';
import useToken from './useToken';

export const withHooksHOC = (Component) => () => {
    const { token, setToken } = useToken();
    return <Component token={token} setToken={setToken} />;
}
