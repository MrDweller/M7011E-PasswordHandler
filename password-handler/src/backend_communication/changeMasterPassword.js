import RestRequest from '../backend_communication/RestRequest';

export function changeMasterPassword(uname, token, password, newPassword, setToken, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };

    let requestData = {};
    requestData["password"] = password;
    requestData["newPassword"] = newPassword;

    RestRequest.put("localhost", 8080, "/user/" + uname, requestData, config, (response) => {
        if (response.status === 400){
            setToken(null);
        }
        else if (response.status === 200){
            callback(true);

        }
    });
}