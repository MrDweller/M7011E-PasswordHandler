import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function changeMasterPassword(uname, setUname, token, setToken, password, newPassword, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["newPassword"] = newPassword;

    RestRequest.put("localhost", 8080, "/user/" + uname, requestData, config, (response) => {
        if (response.status === 403){
            logout(uname, setUname, token, setToken);
        }
        else if (response.status === 200){
            callback(true);

        }
    });
}