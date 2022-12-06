import RestRequest from '../backend_communication/RestRequest';

export function confirmIP(token, userIP, callback) 
{
    let requestData = {};
    console.log("im here now haha");
    requestData["token"] = token;
    requestData["userIP"] = userIP;
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/confirmIP", requestData, (responseData) => {
        callback(responseData["status"]);
    });
}