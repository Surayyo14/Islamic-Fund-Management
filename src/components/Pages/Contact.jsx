import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-container">
        {/* Navigation */}
        <div className="contact-nav">
          <button className="contact-button">Profile</button>
          <button className="contact-button">Courses</button>
        </div>

        <div className="contact-card">
          {/* Header */}
          <div className="contact-header">
            <div className="contact-user">
              <img src="./images/profile.png" alt="User" />
              <div>
                <h1 className="contact-user-name">Alexa Rawles</h1>
              </div>
            </div>
            <button className="save-button">Save</button>
          </div>

          {/* Form */}
          <div className="contact-form">
            <div className="contact-form-group">
              <div>
                <label className="contact-label">First Name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="contact-input"
                />
              </div>
              <div>
                <label className="contact-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="contact-input"
                />
              </div>
            </div>
            <div className="contact-form-group">
              <div>
                <label className="contact-label">Address</label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="contact-input"
                />
              </div>
              <div>
                <label className="contact-label">Birthday</label>
                <input type="date" className="contact-input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
