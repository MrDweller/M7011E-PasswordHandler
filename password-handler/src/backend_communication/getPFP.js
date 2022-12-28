import RestRequest from '../backend_communication/RestRequest';

export function getPFPURL(token) 
{
    let requestData = {};
    requestData["token"] = token;
    RestRequest.post("localhost", 8080, "/getPFP", requestData, (responseData) => {
        
        if(responseData["status"] === false){
            
            return 
        }
        console.log("pfpURL: " + responseData["status"]);
        return responseData["status"];
        
        

        
});
}