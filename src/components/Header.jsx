// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <nav className="navbar">
//           <nav className="nav-logo">
//             <Link to="/">
//               <img src="./images/Logo.png" alt="logo" />
//             </Link>
//           </nav>
//           <nav className="navbar-links">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <select className="select-header" name="" id="">
//                 <option value="Programs">Programs</option>
//                 <option value="International educational programs">
//                   International educational programs
//                 </option>
//                 <option value="Specialized courses">Specialized courses</option>
//                 <option value="Islamic Finance Literacy Course">
//                   Islamic Finance Literacy Course
//                 </option>
//                 <option value="Certification program">
//                   Certification program
//                 </option>
//               </select>
//               <li>
//                 <a href="#">Finance tools</a>
//               </li>
//               <li>
//                 <a href="tel:+998887777777">Contact</a>
//               </li>
//               {/* <select className="select-header2" name="" id="">
//                 <option value="ENG">
//                   ENG
//                 </option>
//                 <option value="UZB">
//              UZB
//                 </option>
//               </select> */}
      

//               <Link to="/register">
//                 <button className="navbar-btn">Sign in</button>
//               </Link>
//             </ul>
//           </nav>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { Link } from "react-router-dom";
import React, { useState } from 'react';
import 'flag-icon-css/css/flag-icons.min.css'; // Bayroqlar uchun flag-icon kutubxonasi

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('ENG');
  const [selectedFlag, setSelectedFlag] = useState('flag-icon-us');

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSelectLanguage = (lang, flag) => {
    setSelectedLang(lang);
    setSelectedFlag(flag);
    setIsOpen(false); // Tanlangan tilni belgilab, menyuni yopamiz
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={toggleDropdown}>
        <span className={`flag-icon ${selectedFlag}`}></span> {selectedLang}
      </div>
      {isOpen && (
        <div className="options">
          <div
            className="option"
            onClick={() => handleSelectLanguage('ENG', 'flag-icon-us')}
          >
            <span className="flag-icon flag-icon-us"></span> ENG
          </div>
          <div
            className="option"
            onClick={() => handleSelectLanguage('UZB', 'flag-icon-uz')}
          >
            <span className="flag-icon flag-icon-uz"></span>UZB
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <img src="./images/Logo.png" alt="logo" />
            </Link>
          </div>
          <div className="navbar-links">
            <ul>
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
                <Link to={'contact'}>Contact</Link>
              </li>
              {/* Tilni tanlash komponenti */}
              <li>
                <LanguageSelector />
              </li>
              <li>
                <Link to="/register">
                  <button className="navbar-btn">Sign in</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
