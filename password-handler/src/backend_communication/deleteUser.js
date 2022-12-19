import RestRequest from '../backend_communication/RestRequest';

export function deleteUser(uname, token, setToken, setUserName) 
{
    let config = {
        headers: {
            user_token: token
        }
    };
    RestRequest.delete("localhost", 8080, "/user/" + uname, config, (response) => {
        if (response.status === 200) {
            setToken(null);
            setUserName(null);
            
        }
    });
}