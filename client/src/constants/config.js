//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading...",
    message: "DATA is being loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occured while fetching response from server, please try again ",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "unable to connect with the server, please check internet connectivity and try again later",
  },
};

//API SERVICE CALL

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
};
