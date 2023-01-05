import LoginAuthority from '../../utils/LoginAuthority';
import RestRequest from '../RestRequest';
import { logout } from '../logout';

export function adminDeleteUser(userUname, userIsAdmin, login, setLogin, callback) 
{
    let config;
    let authPath;
    if (userIsAdmin) {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getAdminAuth());
        config = {
            headers: {
                "super-admin-uname": login.getUname(),
                "super-admin-token": login.getToken(),
            }
        };
    }
    else {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getUserAuth());
        config = {
            headers: {
                "admin-uname": login.getUname(),
                "admin-token": login.getToken(),
            }
        };

    }

    console.log("path: " + authPath + "/" + userUname);
    console.log("config:");
    console.log(config);
    

    RestRequest.delete(authPath + "/" + userUname, config, (response) => {
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {
            callback(true);
            return;
        }
    });
}