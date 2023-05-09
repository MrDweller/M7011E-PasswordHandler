import axios from "axios";

// Server address and port
const host = "friskjesper.se"
const port = 8080

class RestRequest {
    static post(path, requestData, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.post(url, requestData, config).then(response => {
            console.log("Request " + url);
            console.log("Request body: " + requestData);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            console.log(error);
            responseCallback(error.response);
        });
    }

    static get(path, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.get(url, config)
        .then((response) => {
            console.log("Request " + url);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            console.log(error);
            responseCallback(error.response);
        });

    }

    static put(path, requestData, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.put(url, requestData, config).then(response => {
            console.log("Request " + url);
            console.log("Request body: " + requestData);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            console.log(error);
            responseCallback(error.response);
        });
    }

    static delete(path, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.delete(url, config).then(response => {
            console.log("Request " + url);

            console.log("statusCode: " + response.status);
            responseCallback(response);
        }).catch((error) => {
            console.log(error);
            responseCallback(error.response);
        });
    }

}

export default RestRequest;
