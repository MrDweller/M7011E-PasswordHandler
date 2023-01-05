import { logout } from "../logout";
import RestRequest from "../RestRequest";

export function getAdmins(login, setLogin, callback) {
    let config = {
        headers: {
            "super-admin-uname": login.getUname(),
            "super-admin-token": login.getToken()
        }
    };

    RestRequest.get("/admins", config, (response) => {
        if (response.status === 200) {
            console.log("response ");
            console.log(response.data);
            callback(response.data)
            return;
        }
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }

    });
}