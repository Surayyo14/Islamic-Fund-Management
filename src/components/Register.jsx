import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./authService";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.tokens.accessToken);
      localStorage.setItem("refreshToken", data.tokens.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/"); // Ro'yxatdan o'tgach home page ga o'tish
    },
    onError: (error) => {
      console.error("Register error:", error);
      alert(error?.response?.data?.message || "Registration failed");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
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
                <h2>Ask Diyor</h2>
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
              <button className="navbar-btn" type="submit">
                Register
              </button>
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
