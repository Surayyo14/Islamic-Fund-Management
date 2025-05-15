import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icons.min.css";

// LanguageSelector komponenti
const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [selectedFlag, setSelectedFlag] = useState("flag-icon-us");

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
      className="language-selector"
      style={{ position: "relative", cursor: "pointer" }}
    >
      <div
        className="selected-language"
        onClick={toggleDropdown}
        style={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        <span className={`flag-icon ${selectedFlag}`}></span> {selectedLang}
      </div>
      {isOpen && (
        <div className="options">
          <div
            className="option"
            onClick={() => handleSelectLanguage("ENG", "flag-icon-us")}
          >
            <span className="flag-icon flag-icon-us"></span> ENG
          </div>
          <div
            className="option"
            onClick={() => handleSelectLanguage("UZB", "flag-icon-uz")}
          >
            <span className="flag-icon flag-icon-uz"></span> UZB
          </div>
        </div>
      )}
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
            <li>
              <select className="select-header" name="programs" id="programs">
                <option value="Programs">Programs</option>
                <option value="International educational programs">
                  International educational programs
                </option>
                <option value="Specialized courses">Specialized courses</option>
                <option value="Islamic Finance Literacy Course">
                  Islamic Finance Literacy Course
                </option>
                <option value="Certification program">
                  Certification program
                </option>
              </select>
            </li>
            <li>
              <a href="#">Finance tools</a>
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
