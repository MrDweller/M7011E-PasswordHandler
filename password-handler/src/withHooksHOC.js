import React from 'react';
import useToken from './useToken';
import useUserName from './useUserName';
import usePFP from './usePFP';

export const withHooksHOC = (Component) => () => {
    const { token, setToken } = useToken();
    const { userName, setUserName } = useUserName();
    const {pfpURL, setPFP} = usePFP();

    return <Component token={token} setToken={setToken} userName={userName} setUserName={setUserName} pfpURL = {pfpURL} setPFP = {setPFP}/>;
}
