import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered with:", fullName, phoneNumber, password);

    // Malumotlarni localStorage ga saqlasa ham bo'ladi, hozircha faqat console
    // localStorage.setItem('user', JSON.stringify({ fullName, phoneNumber, password }));

    // Ro'yxatdan o'tgandan keyin Home sahifaga o'tkazish
    navigate("/");
  };

  return (
    <section className="register">
      <div className="container4">
     <div className="register-wrapper">
    <div className="register-wrap">
    <nav className="nav-logo logo-wrap">
          <img src="./images/Logo.png" alt="logo" />
          <div className="register-item">
            <h4>Questions?</h4>
            <h2>Ask Diyor</h2>
          </div>
        </nav>

     <div className="register-start">
     <h2>Get started</h2>
        <p>
          Already have an account?
          <Link to="/register2" style={{ marginLeft: "5px", color: "#009688" }}>
            Sign In
          </Link>
        </p>
     </div>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="navbar-btn" type="submit">
            Register
          </button>
        </form>

       
    </div>
    <div className="register-wrap2">
        <img src="./images/register.png" alt="" />
        <p>Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance</p>
    </div>
     </div>
      </div>
    </section>
  );
}

export default Register;

