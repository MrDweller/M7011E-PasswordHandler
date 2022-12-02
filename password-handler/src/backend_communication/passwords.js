import RestRequest from '../backend_communication/RestRequest';

export function readAllPasswords(token, setToken, callback) {
    let requestData = {};
    requestData["token"] = token;
    RestRequest.post("localhost", 8080, "/readAllPasswords", requestData, (responseData) => {
        console.log(responseData);
        if (responseData["error"]){
            if (responseData["error"] === "INVALID_TOKEN"){
                setToken(null);

            }
        }
        else {
            callback(responseData);

        }
    });
}

export function readPassword(token, setToken, password, website_url, website_uname, callback) {
    let requestData = {};
    requestData["token"] = token;
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.post("localhost", 8080, "/readPassword", requestData, (responseData) => {
        if (responseData["error"]){
            if (responseData["error"] === "INVALID_TOKEN"){
                setToken(null);
            }
        }
        else {
            callback(responseData["password"]);

        }
    });
}