import { logout } from "../logout";
import RestRequest from "../RestRequest";

export function createAdmin(login, setLogin, uname, email, callback) {
    if (!login.isSuperAdmin()) {
        return;
    }
    let config = {
        headers: {
            "super-admin-uname": login.getUname(),
            "super-admin-token": login.getToken()
        }
    };

    let requestData = {};
    requestData["uname"] = uname;
    requestData["email"] = email;
    RestRequest.post("/admin", requestData, config, (response) => {
        if (response.status === 201) {
            callback("SUCCESS");
            return;
        }
        if (response.status === 401) {
            callback("SUCCESS_EMAIL");
            return;
        }
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 470) {
            callback("UNAME_TAKEN");
            return;
        }

        if (response.status === 471) {
            callback("EMAIL_TAKEN");
            return;
        }


    });
}