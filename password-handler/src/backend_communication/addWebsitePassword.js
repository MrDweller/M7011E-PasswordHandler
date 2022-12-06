import RestRequest from '../backend_communication/RestRequest';

export function addWebsitePassword(token, password, website_url, website_uname, callback) 
{
    let requestData = {};
    requestData["token"] = token;
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    
    RestRequest.post("localhost", 8080, "/addPassword", requestData, (responseData) => {
        if (responseData["error"]){
            return;
        }
        callback(responseData["status"]);
    });
}