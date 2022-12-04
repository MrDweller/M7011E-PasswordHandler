import React from 'react';
import useToken from './useToken';
import useUserName from './useUserName';

export const withHooksHOC = (Component) => () => {
    const { token, setToken } = useToken();
    const { userName, setUserName } = useUserName();

    return <Component token={token} setToken={setToken} userName={userName} setUserName={setUserName}/>;
}
