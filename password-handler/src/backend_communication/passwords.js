import RestRequest from '../backend_communication/RestRequest';

export function readAllPasswords(uname, callback) {
    let requestData = {};
    requestData["uname"] = uname;
    RestRequest.post("localhost", 8080, "/readAllPasswords", requestData, (responseData) => {
        callback(responseData["passwords"]);
    });
}

export function readPassword(uname, password, website_url, website_uname, callback) {
    let requestData = {};
    requestData["uname"] = uname;
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.post("localhost", 8080, "/readPassword", requestData, (responseData) => {
        callback(responseData["passwords"]);
    });
}