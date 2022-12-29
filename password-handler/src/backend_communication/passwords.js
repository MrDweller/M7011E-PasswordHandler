import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function readAllPasswords(login, setLogin, callback) {
    if (login.isAdmin()) {
        return;
    }
    
    let config = {
        headers: {
            "user-token": login.getToken()
        }
    };
    RestRequest.get("localhost", 8080, "/passwords/" + login.getUname(), config, (response) => {
        console.log("status " + response.status);
        if (response.status === 403){
            logout(login, setLogin);
            return;
        }
        if (response.status === 200){
            callback(response.data);
            return;
        }
    });
}

export function readPassword(login, setLogin, password, website_url, website_uname, callback) {
    if (login.isAdmin()) {
        return;
    }
    let config = {
        headers: {
            "user-token": login.getToken()
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.put("localhost", 8080, "/password/" + login.getUname(), requestData, config, (response) => {
        
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {
            callback(response.data["website_password"]);
            return;

        }
    });
}