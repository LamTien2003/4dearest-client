import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_REQUEST_URL,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // const token = getTokens();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    if (process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API_KEY) {
      config.headers["X-CSCAPI-KEY"] =
        process.env.NEXT_PUBLIC_COUNTRY_STATE_CITY_API_KEY;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // return response.data;
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
