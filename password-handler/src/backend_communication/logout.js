import RestRequest from '../backend_communication/RestRequest';
import LoginAuthority from '../utils/LoginAuthority';
import LoginObject from '../utils/LoginObject';

export function logout(login, setLogin) 
{
    let config;
    if (LoginAuthority.isAdmin(login.getLoginAuth())) {
        config = {
            headers: {
                "admin-token": login.getToken()
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
    let authPath = LoginAuthority.getAuthPathFromLoginAuth(login.getLoginAuth());

    RestRequest.get(authPath + "/" + login.getUname() + "/logout", config, (response) => {
        setLogin(new LoginObject(null, null, null));
        
        if (response.status === 200) {
            return;
        }
        if (response.status === 403) {
            return;
        }
    });
}