import axios from "axios";

const request = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://api.al-muamalat.uz/api",
  params: {},
});

// Request interceptor
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("testUserToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Response interceptor
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error?.response?.status;
    if (statusCode === 401) {
      window.localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export { request };
