import RestRequest from '../backend_communication/RestRequest';

export function login(identification, password, userIP, setToken) 
{
    let requestData = {};
    console.log("im here now haha");
    requestData["identification"] = identification;
    requestData["password"] = password;
    requestData["userIP"] = userIP;
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/authenticate", requestData, (responseData) => {
        setToken(responseData["token"]);
    });
}