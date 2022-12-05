import RestRequest from '../backend_communication/RestRequest';

export function changeMasterPassword(token, password, newPassword, setToken, callback) {
    let requestData = {};
    requestData["token"] = token;
    requestData["password"] = password;
    requestData["newPassword"] = newPassword;

    RestRequest.post("localhost", 8080, "/changeMasterPassword", requestData, (responseData) => {
        console.log(responseData);
        if (responseData["error"]){
            if (responseData["error"] === "INVALID_TOKEN"){
                setToken(null);

            }
        }
        else {
            callback(responseData["status"]);

        }
    });
}