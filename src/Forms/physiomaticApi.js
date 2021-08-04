import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    // Accept: "application/json",
    // "Content-Type": "application/json",
    // Authorization: 'Bearer ' + token // if you use token
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
