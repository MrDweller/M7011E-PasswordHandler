import RestRequest from '../backend_communication/RestRequest';

export function readAllPasswords(token, callback) {
    let requestData = {};
    requestData["token"] = token;
    RestRequest.post("localhost", 8080, "/readAllPasswords", requestData, (responseData) => {
        callback(responseData["passwords"]);
    });
}

export function readPassword(token, password, website_url, website_uname, callback) {
    let requestData = {};
    requestData["token"] = token;
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.post("localhost", 8080, "/readPassword", requestData, (responseData) => {
        callback(responseData["password"]);
    });
}