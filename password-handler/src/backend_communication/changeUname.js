import RestRequest from '../backend_communication/RestRequest';

export function changeUname(uname, token, newUname, setToken, callback) {
    let config = {
        headers: {
            user_token: token
        }
    };

    let requestData = {};
    requestData["uname"] = newUname;

    RestRequest.put("localhost", 8080, "/user/" + uname, requestData, config, (response) => {
        if (response.status === 400){
            setToken(null);
        }
        else if (response.status === 200){
            callback(true);

        }
    });
}