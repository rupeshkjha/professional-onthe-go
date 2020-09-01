import Axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// class API {
//     get = function* (url) {
//         const token = sessionStorage.getItem('token') || '';
//         let jsonData = yield fetch(process.env.REACT_APP_API_URL+url, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => res.json())
//         .catch(err => console.log("API BUG", err));
//         return jsonData;
//     }

//     post = function* postApi(url, data) {
//         const token = sessionStorage.getItem('token') || '';
//         let jsonData = yield fetch(process.env.REACT_APP_API_URL+url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         }).then(res => res.json())
//         .catch(err => console.log("API BUG", err));
//         return jsonData;
//     }
// }

// export const Api = new API();
// import { handleErrorResponse } from "./service.util";

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      "Content-Type": "application/json",
    };
    if (window.sessionStorage.getItem("token")) {
      const token = window.sessionStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

export const post = (url, payload) => {
  return Axios.post(`${API_URL}${url}`, payload)
    .then((res) => {
      console.log("Response", res.status);
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res) => {
      console.log("Err", res.response.data);
        return res.response.data;
    });
};
export const put = (url, payload) => {
  return Axios.put(`${API_URL}${url}`, payload)
    .then((res) => {
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: res.response.data,
      };
    });
};

export const get = (url) => {
  return Axios.get(`${API_URL}${url}`)
    .then((res) => {
      return {
        success: true,
        message: "",
        statusCode: res.status,
        data: res.data,
      };
    })
    .catch((res) => {
      const response = res.response;
      return {
        success: false,
        message: response.data.error,
        statusCode: response.status,
        data: res.response.data,
      };
    });
};
