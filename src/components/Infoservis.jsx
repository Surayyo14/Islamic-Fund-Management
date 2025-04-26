import React from "react";

const Infoservis = () => {
  return (
    <section className="info-servis">
      <div className="container">
        <div className="info-title">
          <h2>Our services </h2>
          <p>
            Expert guidance for managing funds in alignment with Islamic <br />
            principles, helping you make informed, halal investment <br />{" "}
            decisions.
          </p>
        </div>
        <div className="info-card-wrapper">
          <div className="info-card">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.</p>
            <button className="info-btn">Learn more</button>
          </div>
          <div className="info-card2">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.</p>
            <button className="info-btn">Learn more</button>
          </div>
          <div className="info-card3">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.</p>
            <button className="info-btn">Learn more</button>
          </div>
          <div className="info-card4">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.</p>
            <button className="info-btn">Learn more</button>
          </div>
          <div className="info-card5">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.</p>
            <button className="info-btn">Learn more</button>
          </div>
          <div className="info-card6">
            <div className="info-card-item">
              <img src="./images/Info1.png" alt="rasm" />
              <h3>Islamic Fund Management</h3>
            </div>
            <p>We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.</p>
            <button className="info-btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infoservis;
