import RestRequest from '../backend_communication/RestRequest';

export function getUserName(identification, callback) 
{
    RestRequest.get("localhost", 8080, "/user/" + identification + "/uname", null, (response) => {
        callback(response.data["uname"]);
    });
}