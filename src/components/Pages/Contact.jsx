import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const Contact = () => {
    return (
       <>
       <Header/>
        <div className="profile-container">
            {/* Left section */}
            <div className="profile-left">
                <div>
                    <h1 className="profile-title">Let’s Talk</h1>
                    <p className="profile-description">
                        Have some big idea or brand to develop and need help?
                        Then reach out — we’d love to hear about your project
                        and provide help.
                    </p>
                </div>

                <div>
                    <h2 className="profile-subheading"> Email</h2>
                    <a className="profile-text" href="mailto:beebs@gmail.com">beebs@gmail.com</a>
                </div>

                <div className="socials">
                    <h2 className="profile-subheading"> Socials</h2>
                    <ul className="profile-socials">
                        <li><a href="#" className="profile-link">Instagram</a></li>
                        <li><a href="#" className="profile-link">Twitter</a></li>
                        <li><a href="#" className="profile-link">Facebook</a></li>
                    </ul>
                </div>
            </div>

            {/* Right section */}
            <div className="profile-right">
                <div>
                    <label className="profile-label">Name</label>
                    <input type="text" className="profile-input" placeholder="Your name" />
                </div>

                <div>
                    <label className="profile-label">Email</label>
                    <input type="email" className="profile-input" placeholder="Your email" />
                </div>

                <div>
                    <label className="profile-label">What service are you interested in</label>
                    <select className="profile-input">
                        <option>Select project type</option>
                    </select>
                </div>

                <div>
                    <label className="profile-label">Budget</label>
                    <select className="profile-input">
                        <option>Select project budget</option>
                    </select>
                </div>

                <div>
                    <label className="profile-label">Message</label>
                    <textarea rows="5" className="profile-input" placeholder="Your message"></textarea>
                </div>

                <button className="profile-button">Submit</button>
            </div>
        </div>
        <Footer/>
       </>
    );
};

export default Contact;
