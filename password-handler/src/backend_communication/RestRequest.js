import axios from "axios";

class RestRequest {
    static post(host, port, path, requestData, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.post(url, requestData).then(response => {
            console.log("Request " + url);
            console.log("Request body: " + requestData);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response.data);
        }).catch((error) => {
            responseCallback(error);
        });
    }

    static get(host, port, path, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.get(url)
        .then((response) => {
            console.log("Request " + url);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response.data);
        }).catch((error) => {
            responseCallback(error);
        });

    }

}

export default RestRequest;