import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function readAllPasswords(uname, setUserName, token, setToken, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };
    RestRequest.get("localhost", 8080, "/passwords/" + uname, config, (response) => {
        console.log("status " + response.status);
        if (response.status === 403){
            logout(uname, setUserName, token, setToken);
            return;
        }
        if (response.status === 200){
            callback(response.data);
            return;
        }
    });
}

export function readPassword(uname, setUserName, token, setToken, password, website_url, website_uname, callback) {
    let config = {
        headers: {
            "user-token": token
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.put("localhost", 8080, "/password/" + uname, requestData, config, (response) => {
        
        if (response.status === 403) {
            logout(uname, setUserName, token, setToken);
            return;
        }
        if (response.status === 200) {
            callback(response.data["website_password"]);
            return;

        }
    });
}