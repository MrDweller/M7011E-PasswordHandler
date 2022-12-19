import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function deleteUser(uname, setUserName, token, setToken) 
{
    let config = {
        headers: {
            user_token: token
        }
    };
    RestRequest.delete("localhost", 8080, "/user/" + uname, config, (response) => {
        if (response.status === 404) {
            setToken(null);
            setUserName(null);
            return;
        }
        if (response.status === 403) {
            logout(uname, setUserName, token, setToken);
            return;
        }
        if (response.status === 200) {
            setToken(null);
            setUserName(null);
            return;
        }
    });
}