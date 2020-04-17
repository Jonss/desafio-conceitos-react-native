import axios from "axios";

const api = axios.create({
  baseURL: "http://3847827a.ngrok.io",
});

export default api;
