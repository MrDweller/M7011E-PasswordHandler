import axios from "axios";

class RestRequest {
    static post(host, port, path, requestData, config, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.post(url, requestData, config).then(response => {
            console.log("Request " + url);
            console.log("Request body: " + requestData);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error);
        });
    }

    static get(host, port, path, config, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.get(url, config)
        .then((response) => {
            console.log("Request " + url);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error);
        });

    }

    static put(host, port, path, requestData, config, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.put(url, requestData, config).then(response => {
            console.log("Request " + url);
            console.log("Request body: " + requestData);

            console.log("statusCode: " + response.status);

            console.log("Response body: ");
            console.log(response.data);
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error);
        });
    }

    static delete(host, port, path, config, responseCallback) {
        let url = "http://" + host + ":" + port + path;
        axios.delete(url, config).then(response => {
            console.log("Request " + url);

            console.log("statusCode: " + response.status);
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error);
        });
    }

}

export default RestRequest;