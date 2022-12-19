import RestRequest from '../backend_communication/RestRequest';

export function login(uname, password, userIP, setToken, setUserName) 
{
    let requestData = {};
    requestData["password"] = password;
    requestData["ip"] = userIP;
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/user/" + uname + "/login", requestData, null, (response) => {
        console.log(response.headers["user_token"]);
        setToken(response.headers["user_token"]);
        console.log(uname);
        setUserName(uname);
        console.log("login");
    });
}