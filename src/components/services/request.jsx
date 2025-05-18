// import axios from "axios";

// const request = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
//   baseURL: "https://api.al-muamalat.uz/api",
//   params: {},
// });

// // Request interceptor
// request.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("testUserToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// request.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const statusCode = error?.response?.status;
//     if (statusCode === 401) {
//       window.localStorage.clear();
//     }
//     return Promise.reject(error);
//   }
// );

// export { request };

// services/request.jsx - sizda bor:
import axios from "axios";

const request = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://api.al-muamalat.uz/api",
  params: {},
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("testUserToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.localStorage.clear();
      // Optionally redirect to login here
    }
    return Promise.reject(error);
  }
);

export { request };
