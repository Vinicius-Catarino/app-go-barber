import axios from "axios";

const api = axios.create({
  baseURL: "http://7cef171d623a.ngrok.io",
});

export default api;
