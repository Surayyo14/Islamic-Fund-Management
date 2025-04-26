import React from "react";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-wrapper">
          <div className="showcase-item">
            <button className="showcase-btn1">
              Seeking Knowledge is an Obligation in Islam
            </button>
            <h2>
              Enhance Your Understanding of Islamic Ethics with Al-Muamalat
            </h2>
            <button className="showcase-btn2">Students’ opnion</button>
          </div>
          <div className="showcase-img">
            <img src="./images/Showcase.png" alt="Showcase img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
