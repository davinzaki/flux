import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL || "http://localhost:5000/api",
});
