import RestRequest from '../backend_communication/RestRequest';

export function confirmIP(uname, token, userIP, callback) {
    let requestData = {};
    requestData["ip"] = userIP;
    let config = {
        headers: {
            "email-token": token
        }
    };
    RestRequest.post("localhost", 8080, "/user/" + uname + "/confirmIp", requestData, config, (response) => {
        if (response.status === 200) {
            callback(true);
            return;
        }
        if (response.status === 403) {
            callback(false);
            return;
        }
        callback(false);
    });
}