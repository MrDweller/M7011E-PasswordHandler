import RestRequest from '../backend_communication/RestRequest';

export function login(identification, password, setToken) 
{
    let requestData = {};
    requestData["identification"] = identification;
    requestData["password"] = password;
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/authenticate", requestData, (responseData) => {
        setToken(responseData["token"]);
    });
}