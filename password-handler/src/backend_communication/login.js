import RestRequest from '../backend_communication/RestRequest';

export function login(uname, setUserName, setToken, password, userIP) 
{
    let requestData = {};
    requestData["password"] = password;
    requestData["ip"] = userIP;
    RestRequest.post("localhost", 8080, "/user/" + uname + "/login", requestData, null, (response) => {
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
            setToken(response.headers["user_token"]);
            setUserName(uname);

        }
    });
}