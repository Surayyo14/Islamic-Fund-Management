import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src="./images/footer-logo.png" alt="" />
          </div>
          <div className="footer-links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Contact Us</a>
          </div>
          <div className="footer-user container3">
            <a href="">
              <img src="./images/youtube-footer.png" alt="" />
            </a>
            <a href="">
              <img src="./images/Facebook-footer.png" alt="" />
            </a>
            <a href="">
              <img src="./images/Twitter-footer.png" alt="" />
            </a>
            <a href="">
              <img src="./images/instagram-footer.png" alt="" />
            </a>
          </div>
          <div className="footer-bottom">
            <h3>Copyright Satyam Studio</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
