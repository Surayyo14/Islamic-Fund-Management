import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "./context";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { full_name, password, phone_number } = data;
    auth
      .register({ full_name, password, phone_number })
      .then(() => {
        toast.success("Muvaffaqiyatli amalga oshirildi");
        navigate("/"); // Ro'yxatdan o'tgandan keyin home page ga o'tish
      })
      .catch(() => {
        toast.error("Ro'yxatdan o'tishda xatolik");
      });
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
