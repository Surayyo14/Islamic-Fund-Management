import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <nav className="nav-logo">
            <Link to="/">
              <img src="./images/Logo.png" alt="logo" />
            </Link>
          </nav>
          <nav className="navbar-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <select className="select-header" name="" id="">
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
              <li>
                <a href="#">Finance tools</a>
              </li>
              <li>
                <a href="tel:+998887777777">Contact</a>
              </li>
              <select className="select-header2" name="" id="">
                <option value="ENG">ENG</option>
                <option value="UZB">UZB</option>
                <option value="RUS">RUS</option>
              </select>
              <Link to="/register">
                <button className="navbar-btn">Sign in</button>
              </Link>
            </ul>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
