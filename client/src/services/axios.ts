import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL || "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
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

        // Dispatch event to update context
        window.dispatchEvent(new Event("tokenRefreshed"));

        return api(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Clear tokens
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        // Dispatch logout event
        window.dispatchEvent(new Event("forceLogout"));

        // Redirect to login
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // Forward other errors
  }
);
