import RestRequest from '../backend_communication/RestRequest';
import { login } from './login';

export function signup(uname, email, password, setToken) 
{
    let requestData = {};
    requestData["uname"] = uname;
    requestData["email"] = email;
    requestData["password"] = password;
    RestRequest.post("localhost", 8080, "/user", requestData, (responseData) => {
        if (responseData["status"] === true) {
            login(uname, password, setToken);

        } 

    });
}