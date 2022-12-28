import RestRequest from '../backend_communication/RestRequest';


export function uploadPFP(token, file, setPFP) 
{
    
    let requestData = {};
    requestData["token"] = token;
    requestData["file"] = file;
    RestRequest.post("localhost", 8080, "/uploadPFP", requestData, (responseData) => {

        console.log("uploadPFP responsedata: " +  responseData["status"])
        fetch(responseData["status"],{

            method: "PUT",

            body: file
        }).then(function(){
            
            const pfpURL = responseData["pfpURL"];
            let jsonData = {
                pfpURL: pfpURL,
                pfpHash: Date.now()
            }
        
            console.log("image url = " + pfpURL);
            setPFP(jsonData)
        });
        

        
        


        
        

    });
}