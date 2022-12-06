import RestRequest from '../backend_communication/RestRequest';

export function changeUname(token, newUname, setToken, callback) {
    let requestData = {};
    requestData["token"] = token;
    requestData["new_uname"] = newUname;

    RestRequest.post("localhost", 8080, "/changeUname", requestData, (responseData) => {
        console.log(responseData);
        if (responseData["error"]){
            if (responseData["error"] === "INVALID_TOKEN"){
                setToken(null);

            }
        }
        else {
            callback(responseData["status"]);

        }
    });
}