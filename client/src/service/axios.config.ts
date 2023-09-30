import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (config) {
    const token = "get token from local storage ";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
