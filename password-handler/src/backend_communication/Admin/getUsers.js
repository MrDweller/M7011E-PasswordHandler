import { logout } from "../logout";
import RestRequest from "../RestRequest";

export function getUsers(login, setLogin, callback) {
    let config = {
        headers: {
            "admin-uname": login.getUname(),
            "admin-token": login.getToken()
        }
    };

    RestRequest.get("/users", config, (response) => {
        if (response.status === 200) {
            callback(response.data)
            return;
        }
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }

    });
}