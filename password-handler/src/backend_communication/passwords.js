import RestRequest from '../backend_communication/RestRequest';

export function readAllPasswords(uname, token, setToken, setUserName, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };
    RestRequest.get("localhost", 8080, "/passwords/" + uname, config, (response) => {
        if (response.status === 400){
            setToken(null);
            setUserName(null);
        }
        else if (response.status === 200){
            callback(response.data);

        }
    });
}

export function readPassword(uname, token, setToken, setUserName, password, website_url, website_uname, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["website_url"] = website_url;
    requestData["website_uname"] = website_uname;
    RestRequest.put("localhost", 8080, "/password/" + uname, requestData, config, (response) => {
        if (response === 400){
            setToken(null);
            setUserName(null);
        }
        else {
            callback(response.data["website_password"]);

        }
    });
}