import RestRequest from '../backend_communication/RestRequest';

export function logout(uname, token, setToken, setUserName) 
{
    let config = {
        headers: {
            user_token: token
        }
    };
    RestRequest.get("localhost", 8080, "/user/" + uname + "/logout", config, (response) => {
        setToken(null);
        setUserName(null);
        if (response.status === 200) {
            
        }
    });
}