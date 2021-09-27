import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const response = (response) => response;

export const requests = {
  get: (url) => axios.get(url).then(response),
  post: (url, body) => axios.post(url, body).then(response),
  put: (url, body) => axios.put(url, body).then(response),
  del: (url) => axios.delete(url).then(response),
  getWithBody: (url, body) => axios.get(url, body).then(response),
};

// export default requests;
