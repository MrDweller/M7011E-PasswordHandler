import RestRequest from '../backend_communication/RestRequest';
import { login } from './login';

export function signup(uname, email, password, userIP, setToken) 
{
    let requestData = {};
    requestData["uname"] = uname;
    requestData["email"] = email;
    requestData["password"] = password;
    requestData["userIP"] = userIP;
    RestRequest.post("localhost", 8080, "/user", requestData, (responseData) => {
        if (responseData["status"] === true) {
            login(uname, password, userIP, setToken);

        } 

    });
}