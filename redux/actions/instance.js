import axios from "axios";

const instance = axios.create({
  baseURL: "http://chabra.herokuapp.com/api/"
});

export default instance;
