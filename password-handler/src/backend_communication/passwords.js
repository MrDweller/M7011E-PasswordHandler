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
    RestRequest.get("/passwords/" + login.getUname(), config, (response) => {
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
    RestRequest.put("/password/" + login.getUname(), requestData, config, (response) => {
        
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

export function regeneratePassword(login, setLogin, password, website_url, website_uname, callback) {
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
    RestRequest.patch("/password/" + login.getUname(), requestData, config, (response) => {
        
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

export function deletePassword(login, setLogin, password, website_url, website_uname, callback) {
    if (login.isAdmin()) {
        return;
    }
    const config = {
        data: {
            "password": password,
            "website_url": website_url,
            "website_uname": website_uname
        },
        headers: {
            "user-token": login.getToken()
        }
    };


    RestRequest.delete("/password/" + login.getUname(), config, (response) => {
        
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {
            callback(true);
            return;

        }
    });
}