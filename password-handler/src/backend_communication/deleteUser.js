import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';

export function deleteUser(login, setLogin) 
{
    let config;
    if (login.isAdmin()) {
        config = {
            headers: {
                "admin-token": login.getToken(),
            }
        };
    }
    else {
        config = {
            headers: {
                "user-token": login.getToken()
            }
        };

    }

    let authPath = login.getAuthPath();

    RestRequest.delete(authPath + "/" + login.getUname(), config, (response) => {
        if (response.status === 404) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {
            logout(login, setLogin);
            return;
        }
    });
}