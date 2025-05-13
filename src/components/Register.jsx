import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: (submitData) => {
      return axios
        .post("https://api.al-muamalat.uz/api/auth/signup", submitData)
        .then((res) => {
          console.log(res?.data);
          localStorage.setItem(
            "testUserToken",
            res?.data?.data?.tokens?.accessToken
          );
        });
    },
    onSuccess: () => {
      toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      navigate("/");
    },
    onError: () => {
      toast.error("Ro'yxatdan o'tishda xatolik yuz berdi.");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="register">
      <div className="container4">
        <div className="register-wrapper">
          <div className="register-wrap">
            <nav className="nav-logo logo-wrap">
              <Link to="/">
                <img src="./images/Logo.png" alt="logo" />
              </Link>
              <div className="register-item">
                <h4>Questions?</h4>
                <h2>
                  <a
                    href="https://t.me/Surayyo1402"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask Diyor
                  </a>
                </h2>
              </div>
            </nav>

            <div className="register-start">
              <h2>Get started</h2>
              <p>
                Already have an account?
                <Link
                  to="/register2"
                  style={{ marginLeft: "5px", color: "#009688" }}
                >
                  Sign In
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("full_name", { required: true })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone_number", { required: true })}
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              <button className="navbar-btn" type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </button>

              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  Ro'yxatdan o'tishda xatolik yuz berdi.
                </p>
              )}
            </form>
          </div>

          <div className="register-wrap2">
            <img src="./images/register.png" alt="" />
            <p>
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
