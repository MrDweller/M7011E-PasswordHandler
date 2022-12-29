import RestRequest from '../backend_communication/RestRequest';
import LoginAuthority from '../utils/LoginAuthority';
import LoginObject from '../utils/LoginObject';
import { getPFP } from './getPFP';

export function login(uname, setLogin, password, userIP, isAdmin, setPFP)
{
    let authPath;
    if (isAdmin) {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getAdminAuth());
    } 
    else {
        authPath = LoginAuthority.getAuthPathFromLoginAuth(LoginAuthority.getUserAuth());
    }

    let requestData = {};
    requestData["password"] = password;
    requestData["ip"] = userIP;
    RestRequest.post("localhost", 8080, authPath + "/" + uname + "/login", requestData, null, (response) => {
        console.log(response.headers);
        if (response.status === 401) {
            return;
        }
        if (response.status === 403) {
            return;
        }
        if (response.status === 404) {
            return;
        }
        if (response.status === 200) {
            if (isAdmin) {
                let token = response.headers["admin-token"];
                let config = {
                    headers: {
                        "admin-token": token
                    }
                };
                RestRequest.get("localhost", 8080, authPath + "/" + uname, config, (response) => {
                    let loginAuth = LoginAuthority.getAdminAuth();
                    if (response.data["isSuperAdmin"]) {
                        loginAuth = LoginAuthority.getSuperAdminAuth();
                    }
                    setLogin(new LoginObject(uname, token, loginAuth));

                });
            } 
            else {
                let login = new LoginObject(uname, response.headers["user-token"], LoginAuthority.getUserAuth());
                getPFP(login, setLogin, (result) => {
                    let pfpURL = result;
                    let jsonData = {
                        pfpURL: pfpURL,
                        pfpHash: Date.now()
                    }
                    setPFP(jsonData);
                });
                setLogin(login);
                
            }

        }
       
    });
}