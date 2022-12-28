import RestRequest from "../RestRequest";

export function createAdmin(login, setLogin, uname, email, userIP, errorCallback) {
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
    requestData["ip"] = userIP;
    RestRequest.post("localhost", 8080, "/admin", requestData, config, (response) => {
        if (response.status === 201) {
            console.log(true);
            return;
        }
        if (response.status === 470) {
            errorCallback("UNAME_TAKEN");
            return;
        }

        if (response.status === 471) {
            errorCallback("EMAIL_TAKEN");
            return;
        }


    });
}