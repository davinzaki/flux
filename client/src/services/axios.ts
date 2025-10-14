import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL || "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Avoid infinite loops
      try {
        const refreshToken = localStorage.getItem("refreshToken"); // Get the refresh token
        const response = await axios.post(
          "http://localhost:5000/api/auth/refresh-token",
          {
            token: refreshToken,
          }
        );

        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken); // Save new token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; // Update request headers

        return api(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        localStorage.clear(); // Clear tokens from storage
        window.location.href = "/login"; // Redirect to login
      }
    }

    return Promise.reject(error); // Forward other errors
  }
);
