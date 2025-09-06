import axios,{ AxiosHeaders }  from "axios";
import qs from "qs";
import { createBrowserHistory } from "history";
const { REACT_APP_SERVER_URL } = process.env;

const history = createBrowserHistory();

const instance = axios.create({
    baseURL: `${REACT_APP_SERVER_URL}`,
    paramsSerializer(params) {
        return qs.stringify(params, { indices: false });
    },
});

instance.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token") || "";
        config.headers = new AxiosHeaders({
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-token": JSON.parse(token),
        });
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response;
        } else {
            if (response) {
                if (response instanceof Array) {
                    return Promise.reject({ response });
                }
                return Promise.reject({ messages: [response] });
            }
            return Promise.reject({ messages: ["got errors"] });
        }
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            history.replace({ pathname: "/error" });
        } else if (error.response && error.response.status === 500) {
            return Promise.reject(error.response);
        } else return Promise.reject(error);
    }
);

export const http = instance;
export default http;