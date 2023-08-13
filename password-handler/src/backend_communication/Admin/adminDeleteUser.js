import LoginAuthority from '../../utils/LoginAuthority';
import RestRequest from '../RestRequest';
import { logout } from '../logout';

export function adminDeleteUser(userUname, userIsAdmin, login, setLogin, password, callback) 
{
    let config;
    let authPath;
    if (userIsAdmin) {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getAdminAuth());
        config = {
            data: {
                "password": password
            },
            headers: {
                "super-admin-uname": login.getUname(),
                "super-admin-token": login.getToken(),
            }
        };
    }
    else {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getUserAuth());
        config = {
            data: {
                "password": password
            },
            headers: {
                "admin-uname": login.getUname(),
                "admin-token": login.getToken(),
            }
        };

    }

    

    RestRequest.delete(authPath + "/" + userUname, config, (response) => {
        if (response.status === 401) {
            callback(401);
            return;
        }
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