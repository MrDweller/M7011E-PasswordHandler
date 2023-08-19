import axios from "axios";

// Server address and port
const host = "localhost"
const port = 8080

class RestRequest {
    static post(path, requestData, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.post(url, requestData, config).then(response => {
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error.response);
        });
    }

    static get(path, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.get(url, config)
        .then((response) => {
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error.response);
        });

    }

    static put(path, requestData, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.put(url, requestData, config).then(response => {
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error.response);
        });
    }

    static patch(path, requestData, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.patch(url, requestData, config).then(response => {
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error.response);
        });
    }

    static delete(path, config, responseCallback) {
        let url = "https://" + host + ":" + port + path;
        axios.delete(url, config).then(response => {
            responseCallback(response);
        }).catch((error) => {
            responseCallback(error.response);
        });
    }

}

export default RestRequest;
