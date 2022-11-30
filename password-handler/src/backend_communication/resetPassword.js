import RestRequest from '../backend_communication/RestRequest';

export function resetPassword(email) 
{

    let requestData = {};
    requestData["email"] = email;
    requestData["subject"] = 'Request for resetting password for your PasswordHandler account';
    requestData["msg"] = 'You have requested to reset your password, click this link to be redicrected';
    console.log(requestData);
    RestRequest.post("localhost", 8080, "/email", requestData, (responseData) => {
        
    });
}