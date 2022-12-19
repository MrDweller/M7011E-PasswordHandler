import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function changeUname(uname, setUname, token, setToken, newUname, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };

    let requestData = {};
    requestData["uname"] = newUname;

    RestRequest.put("localhost", 8080, "/user/" + uname, requestData, config, (response) => {
        if (response.status === 403){
            logout(uname, setUname, token, setToken);
            return;
        }
        if (response.status === 200){
            callback(true);

        }
    });
}