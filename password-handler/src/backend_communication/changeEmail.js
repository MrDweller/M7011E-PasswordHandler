import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function changeEmail(login, setLogin, newEmail, callback) {
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
    requestData["email"] = newEmail;

    RestRequest.put(authPath + "/" + login.getUname(), requestData, config, (response) => {
        if (response.status === 403){
            logout(login, setLogin);
            return;
        }
        if (response.status === 471){
            callback(471);
            return;
        }
        if (response.status === 200){
            callback(true);
            return;

        }
        callback(response.status);
    });
}