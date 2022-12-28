import RestRequest from '../backend_communication/RestRequest';
import { logout } from './logout';


export function uploadPFP(login, setLogin, file, setPFP) {
    let config = {
        headers: {
            "user-token": login.getToken()
        }
    };
    RestRequest.post("localhost", 8080, "/user/" + login.getUname() + "/pfp", null, config, (response) => {
        if (response.status === 403) {
            logout(login, setLogin);
            return;
        }
        if (response.status === 200) {

            fetch(response.data["pfp"], {

                method: "PUT",

                body: file
            }).then(function () {

                const pfpURL = response.data["pfpURL"];
                let jsonData = {
                    pfpURL: pfpURL,
                    pfpHash: Date.now()
                }

                setPFP(jsonData)
            })
            .catch(() => {

            });

        }


    });
}