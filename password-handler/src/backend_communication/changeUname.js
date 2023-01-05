import RestRequest from '../backend_communication/RestRequest';
import LoginObject from '../utils/LoginObject';
import { logout } from './logout';

export function changeUname(login, setLogin, newUname, callback) {
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
    requestData["uname"] = newUname;

    RestRequest.put(authPath + "/" + login.getUname(), requestData, config, (response) => {
        console.log(response.status);
        if (response.status === 403){
            logout(login, setLogin);
            return;
        }
        if (response.status === 470){
            callback(470);
            return;
        }
        if (response.status === 200){
            setLogin(new LoginObject(newUname, login.getToken(), login.getLoginAuth()));
            callback(true);
            return;

        }
        callback(response.status);
    });
}