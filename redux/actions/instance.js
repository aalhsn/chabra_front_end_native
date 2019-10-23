import axios from "axios";

const instance = axios.create({
  // baseURL: "http://134.209.242.76/api/"
  baseURL: "http://127.0.0.1:8000/api/"
});

export default instance;
