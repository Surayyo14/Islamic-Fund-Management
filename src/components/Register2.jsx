// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Register2 = () => {
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = (e) => {
//     e.preventDefault();

//     console.log("Signed in with:", phoneNumber, password);

//     // Bu yerda haqiqiy autentifikatsiya tekshiruvi bo'lishi mumkin
//     navigate("/");
//   };

//   return (
//     <section className="register2">
//       <div className="container4">
//         <div className="register-wrapper">
//           <div className="register-wrap wrap2">
//             <nav className="nav-logo logo-wrap">
//               <img src="./images/Logo.png" alt="logo" />
//               <div className="register-item">
//                 <h4>Questions?</h4>
//                 <h2>Ask Diyor</h2>
//               </div>
//             </nav>

//             <div className="register-start">
//               <h2>Get started</h2>
//             </div>
//             <form onSubmit={handleSignIn}>
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button className="navbar-btn" type="submit">
//                 Sign In
//               </button>
//               <h3>Create a new account !</h3>
//             </form>
//           </div>
//           <div className="register-wrap2">
//             <img src="./images/register.png" alt="" />
//             <p>
//               Welcome to Al Muamalat – Empowering Your Journey in Islamic
//               Finance
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register2;



import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register2 = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signed in with:", phoneNumber, password);
    navigate("/"); // login muvaffaqiyatli bo'lsa home page'ga o'tkazadi
  };

  const handleCreateAccount = () => {
    navigate("/register"); // yangi akkaunt uchun "/register" sahifasiga olib boradi
  };

  return (
    <section className="register2">
      <div className="container4">
        <div className="register-wrapper">
          <div className="register-wrap wrap2">
            <nav className="nav-logo logo-wrap">
              <img src="./images/Logo.png" alt="logo" />
              <div className="register-item">
                <h4>Questions?</h4>
                <h2>Ask Diyor</h2>
              </div>
            </nav>

            <div className="register-start">
              <h2>Get started</h2>
            </div>

            <form onSubmit={handleSignIn}>
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
                Sign In
              </button>

              {/* 👇 Create a new account button */}
              <h3
                style={{ cursor: "pointer", marginTop: "20px", textDecoration: "underline" }}
                onClick={handleCreateAccount}
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
