import React from 'react';
import useToken from './useToken';

export const withHooksHOC = (Component) => {
    return (props) => {
        const {token, setToken} = useToken();

        return <Component token = {token} setToken = {setToken} {...props}/>;
    }
}
