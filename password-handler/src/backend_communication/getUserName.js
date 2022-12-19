import RestRequest from '../backend_communication/RestRequest';

export function getUserName(identification, callback) 
{
    RestRequest.get("localhost", 8080, "/user/" + identification + "/uname", null, (response) => {
        if (response.status === 404) {
            return;
        }
        if (response.status === 200) {
            callback(response.data["uname"]);
            return;
        }
    });
}