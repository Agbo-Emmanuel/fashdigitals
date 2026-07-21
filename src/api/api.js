import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/apiConfig";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60s to handle Render cold starts
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Handle token invalid/expired errors globally
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const message = error.response?.data?.error?.toLowerCase() || "";
//     if (
//       message.includes("token invalid") ||
//       message.includes("token expired") ||
//       message.includes("jwt expired") ||
//       message.includes("invalid token")
//     ) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("userData");
//       toast.error("Session expired. Please login again.");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   },
// );

export default api;
