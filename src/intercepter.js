import fetchIntercept from "fetch-intercept";

const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    config.headers.token = "hgjhhkjhkj ";
    config.headers.platform = " web ";
    //send data inside headers with the help of intercepter body = {
    // content-type:Application, token:225
    //}
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  },
});

export default unregister;
