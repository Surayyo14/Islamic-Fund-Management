import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "./context";
import { toast } from "react-toastify";

const Register2 = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { phone_number, password } = data;
    auth
      .login({ phone_number, password })
      .then(() => {
        toast.success("Muvaffaqiyatli tizimga kirdingiz");
        navigate("/"); // Asosiy sahifaga yo‘naltirish
      })
      .catch(() => {
        toast.error("Kirishda xatolik yuz berdi");
      });
  };

  return (
    <section className="register2">
      <div className="container4">
        <div className="register-wrapper">
          <div className="register-wrap wrap2">
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
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                Sign In
              </button>
              <h3
                style={{
                  cursor: "pointer",
                  marginTop: "20px",
                  textDecoration: "underline",
                }}
                onClick={() => navigate("/register")}
              >
                Create a new account!
              </h3>
            </form>
          </div>

          <div className="register-wrap2">
            <img src="./images/register.png" alt="Register" />
            <p>
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register2;
