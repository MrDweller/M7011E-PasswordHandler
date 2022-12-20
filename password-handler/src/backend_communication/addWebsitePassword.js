import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function addWebsitePassword(uname, setUname, token, setToken, password, website_url, website_uname, callback) 
{
    let config = {
        headers: {
            "user-token": token
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    
    RestRequest.post("localhost", 8080, "/password/" + uname, requestData, config, (response) => {
        if (response.status === 403){
            logout(uname, setUname, token, setToken);
        }
        else if (response.status === 201) {
            callback(true);

        }
    });
}