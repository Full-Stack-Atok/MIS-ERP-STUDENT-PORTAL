// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/student_portal_api/", // adjust if needed
  withCredentials: true, // ⇦ allow cookies
  headers: { "Content-Type": "application/json" },
});

export default api;
