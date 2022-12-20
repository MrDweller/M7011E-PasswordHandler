import RestRequest from '../backend_communication/RestRequest';

export function logout(uname, setUserName, token, setToken) 
{
    let config = {
        headers: {
            "user-token": token
        }
    };
    RestRequest.get("localhost", 8080, "/user/" + uname + "/logout", config, (response) => {
        setToken(null);
        setUserName(null);
        
        if (response.status === 200) {
            return;
        }
        if (response.status === 403) {
            return;
        }
    });
}