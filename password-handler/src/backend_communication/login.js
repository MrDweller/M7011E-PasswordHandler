import RestRequest from '../backend_communication/RestRequest';

export function login(identification, password, userIP, setToken, setPFP) 
{
    let requestData = {};
    console.log("im here now haha");
    requestData["identification"] = identification;
    requestData["password"] = password;
    requestData["userIP"] = userIP;
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/authenticate", requestData, (responseData) => {
        setToken(responseData["token"]);
        requestData["token"] = responseData["token"];
        RestRequest.post("localhost", 8080, "/getPFP" , requestData, (responseData2) => {
            console.log("in restrequest 2" + responseData2["status"]);
            let pfpURL = responseData2["status"];
            let jsonData = {
                pfpURL: pfpURL,
                pfpHash: Date.now()
            }
            setPFP(jsonData);
        })
    });
}