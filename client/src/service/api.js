import axios from "axios";

const API_URL = "http://localhost:4000";
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Start global loader here if needed
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here if needed
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here if needed
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    return {
      isSuccess: false,
      message: `Error: ${error.response.statusText}`,
      data: error.response.data,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      isSuccess: false,
      message: "No response received from the server",
    };
  } else {
    // Something else happened while setting up the request
    return {
      isSuccess: false,
      message: `Error in setting up request: ${error.message}`,
    };
  }
};

export default axiosInstance;
