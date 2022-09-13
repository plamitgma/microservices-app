import axios from "axios";

const baseURL = process.env.BASE_URL || "http:///localhost:8080/api";

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json"
  }
});