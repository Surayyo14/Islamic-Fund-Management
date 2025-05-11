import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../services/request";

const defaultProvider = {
  loading: true,
  setLoading: () => {},
  register: () => Promise.resolve(),
  login: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(defaultProvider?.loading);
  const navigate = useNavigate(); // ✅

  const handleRegister = (submitData) => {
    setLoading(true);
    request
      .post("/auth/signup", submitData)
      .then((response) => {
        const token = response?.data?.data?.tokens?.accessToken;
        if (token) {
          localStorage.setItem("testUserToken", token);
          navigate("/"); // ✅ Sahifani o'zgartirish
        }
      })
      .catch((err) => {
        console.log("Register error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (submitData) => {
    setLoading(true);
    request
      .post("/auth/signin", submitData)
      .then((response) => {
        const token = response?.data?.data?.tokens?.accessToken;
        if (token) {
          localStorage.setItem("testUserToken", token);
          navigate("/"); // ✅
        }
      })
      .catch((err) => {
        console.log("Login error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    loading,
    register: handleRegister,
    login: handleLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
