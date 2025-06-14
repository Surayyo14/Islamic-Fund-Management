// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "flag-icon-css/css/flag-icons.min.css";
// import DropdownMenu from "./Pages/DropdownPrograms";

// // LanguageSelector komponenti

// const LanguageSelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLang, setSelectedLang] = useState("ENG");
//   const [selectedFlag, setSelectedFlag] = useState("flag-icon-us");

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleSelectLanguage = (lang, flag) => {
//     setSelectedLang(lang);
//     setSelectedFlag(flag);
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="language-selector"
//       style={{ position: "relative", cursor: "pointer" }}
//     >
//       <div
//         className="selected-language"
//         onClick={toggleDropdown}
//         style={{ display: "flex", alignItems: "center", gap: "6px" }}
//       >
//         <span className={`flag-icon ${selectedFlag}`}></span> {selectedLang}
//       </div>
//       {isOpen && (
//         <div className="options">
//           <div
//             className="option"
//             onClick={() => handleSelectLanguage("ENG", "flag-icon-us")}
//           >
//             <span className="flag-icon flag-icon-us"></span> ENG
//           </div>
//           <div
//             className="option"
//             onClick={() => handleSelectLanguage("UZB", "flag-icon-uz")}
//           >
//             <span className="flag-icon flag-icon-uz"></span> UZB
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("testUserToken");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("testUserToken");
//     setIsAuthenticated(false);
//     window.location.reload();
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <nav className="navbar">
//           <div className="nav-logo">
//             <Link to="/">
//               <img src="./images/Logo.png" alt="logo" />
//             </Link>
//           </div>

//           <ul className="nav-links">
//             <li>
//               <Link to="/">Home</Link>
//             </li>

//           <DropdownMenu/>

//             <li>
//               {/* <a href="#">Finance tools</a> */}
//               <Link to="/cources">Finance tools</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>

//           <div className="nav-buttons">
//             {isAuthenticated ? (
//               <>
//                 <LanguageSelector />

//                 <Link to="/profile">
//                   <button className="navbar-btn">Profile</button>
//                 </Link>
//                 <button onClick={handleLogout} className="navbar-btn logout">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/register">
//                 <button className="navbar-btn">Sign in</button>
//               </Link>
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icons.min.css";
import DropdownMenu from "./Pages/DropdownPrograms";

// LanguageSelector komponenti
const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [selectedFlag, setSelectedFlag] = useState("flag-icon-us");
  const dropdownRef = useRef(null);

  // Dropdown tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectLanguage = (lang, flag) => {
    setSelectedLang(lang);
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="language-selector"
      style={{ position: "relative", cursor: "pointer" }}
    >
      <div
        className="selected-language"
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          // padding: "8px 12px",
          paddingRight:"20px",
          // border: "1px solid #ddd",
          // borderRadius: "6px",
          backgroundColor: "white",
          fontSize: "15px",
          fontWeight: "500",
          color: "#282828",
          transition: "all 0.2s ease",
          userSelect: "none",
          minWidth: "110px",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.borderColor = "#bbb";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.borderColor = "#ddd";
        }}
      >
        <span 
          className={`flag-icon ${selectedFlag}`}
          style={{ fontSize: "16px" }}
        ></span>
        {selectedLang}
        <span
          style={{
            marginLeft: "4px",
            fontSize: "14px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ▼
        </span>
      </div>
      
      {isOpen && (
        <div
          className="options"
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "white",
            // border: "1px solid #ddd",
            // borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 1000,
            marginTop: "4px",
            overflow: "hidden",
            animation: "slideDown 0.2s ease",
            minWidth: "100px",
            width: "max-content",
          }}
        >
          <div
            className="option"
            onClick={() => handleSelectLanguage("ENG", "flag-icon-us")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 12px",
              cursor: "pointer",
              fontSize: "16px",
              color: "#333",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.2s ease",
              backgroundColor: selectedLang === "ENG" ? "#f0f8ff" : "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f8f9fa";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = selectedLang === "ENG" ? "#f0f8ff" : "white";
            }}
          >
            <span 
              className="flag-icon flag-icon-us"
              style={{ fontSize: "16px" }}
            ></span>
            ENG
          </div>
          <div
            className="option"
            onClick={() => handleSelectLanguage("UZB", "flag-icon-uz")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 12px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              transition: "background-color 0.2s ease",
              backgroundColor: selectedLang === "UZB" ? "#f0f8ff" : "white",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f8f9fa";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = selectedLang === "UZB" ? "#f0f8ff" : "white";
            }}
          >
            <span 
              className="flag-icon flag-icon-uz"
              style={{ fontSize: "16px" }}
            ></span>
            UZB
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("testUserToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("testUserToken");
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src="./images/Logo.png" alt="logo" />
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <DropdownMenu />

            <li>
              <Link to="/cources">Finance tools</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="nav-buttons">
            {isAuthenticated ? (
              <>
                <LanguageSelector />

                <Link to="/profile">
                  <button className="navbar-btn">Profile</button>
                </Link>
                <button onClick={handleLogout} className="navbar-btn logout">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/register">
                <button className="navbar-btn">Sign in</button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;