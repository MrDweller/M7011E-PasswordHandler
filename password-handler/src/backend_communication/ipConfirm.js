import RestRequest from '../backend_communication/RestRequest';
import LoginAuthority from '../utils/LoginAuthority';

export function confirmIP(uname, token, userIP, isAdmin, callback) {
    let authPath;
    if (isAdmin) {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getAdminAuth());
    }
    else {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getUserAuth());
    }

    let config = {
        headers: {
            "email-token": token
        }
    };
    let requestData = {};
    requestData["ip"] = userIP;
    RestRequest.post(authPath + "/" + uname + "/confirmIp", requestData, config, (response) => {
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