import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function getPFP(login, setLogin, callback) {
    let config = {
        headers: {
            "user-token": login.getToken()
        }
    };
    RestRequest.get("/user/" + login.getUname() + "/pfp", config, (response) => {
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {
            callback(response.data["pfpURL"]);

        }

    });
}