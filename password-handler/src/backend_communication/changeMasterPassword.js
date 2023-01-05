import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function changeMasterPassword(login, setLogin, password, newPassword, callback) {
    let config;
    if (login.isAdmin()) {
        config = {
            headers: {
                "admin-token": login.getToken(),
            }
        };
    }
    else {
        config = {
            headers: {
                "user-token": login.getToken()
            }
        };

    }

    let authPath = login.getAuthPath();

    let requestData = {};
    requestData["password"] = password;
    requestData["newPassword"] = newPassword;

    RestRequest.put("localhost", 8080, authPath + "/" + login.getUname(), requestData, config, (response) => {
        if (response.status === 403){
            logout(login, setLogin);
        }
        else if (response.status === 200){
            callback(true);

        }
    });
}