import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function addWebsitePassword(login, setLogin, password, website_url, website_uname, callback) 
{
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
    
    RestRequest.post("localhost", 8080, "/password/" + login.getUname(), requestData, config, (response) => {
        if (response.status === 403){
            logout(login, setLogin);
        }
        else if (response.status === 201) {
            callback(true);

        }
    });
}