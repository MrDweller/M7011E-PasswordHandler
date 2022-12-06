import RestRequest from '../backend_communication/RestRequest';

export function getUserName(token, setToken, setUserName) 
{
    let requestData = {};
    requestData["token"] = token;
    RestRequest.post("localhost", 8080, "/readUserName", requestData, (responseData) => {
        if (responseData["error"]){
            if (responseData["error"] === "INVALID_TOKEN"){
                setToken(null);
                setUserName(null);
            }
            return;
        }
        setUserName(responseData["uname"]);
    });
}