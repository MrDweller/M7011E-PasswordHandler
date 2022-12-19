import RestRequest from '../backend_communication/RestRequest';
import { login } from './login';

export function signup(uname, email, password, userIP, setToken, setUserName) 
{
    let requestData = {};
    requestData["uname"] = uname;
    requestData["email"] = email;
    requestData["password"] = password;
    requestData["ip"] = userIP;
    RestRequest.post("localhost", 8080, "/user", requestData, null, (response) => {
        if (response.status === 201) {
            login(uname, password, userIP, setToken, setUserName);

        } 

    });
}