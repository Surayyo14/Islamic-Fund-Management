import axios from "axios";

// Asosiy axios instance (token qo‘shiladi avtomatik)
const request = axios.create({
  baseURL: "https://api.al-muamalat.uz/api", // Asosiy API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Har bir so‘rov oldidan tokenni qo‘shish
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xatoliklarni qayta ishlash
request.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      localStorage.clear();
      // Optionally redirect to login
    }
    return Promise.reject(error);
  }
);

// Foydalanuvchini ro‘yxatdan o‘tkazish
export const registerUser = async (data) => {
  const response = await request.post("/auth/signup", data);
  return response.data;
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      "https://api.al-muamalat.uz/api/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Login xatosi:", error.response?.data || error.message);
    throw error;
  }
};
export { request };
