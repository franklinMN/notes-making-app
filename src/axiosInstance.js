import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "httphttp://localhost:8080/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
