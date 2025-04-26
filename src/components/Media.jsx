import React from "react";

const Media = () => {
  return (
    <section className="media">
      <div className="container">
        <div className="media-title">
          <h2>Our Media</h2>
          <p>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
        </div>
        <div className="media-showcase">
            <div className="media-text">
                <h2>Our media showcase</h2>
            </div>
            <div className="media-cards">
                <div className="media-card">
                <iframe  height="315" src="https://www.youtube.com/embed/OvnF2f2MZug?si=JvLczgeVjfBz-pgP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="media-card">
                <iframe  height="315" src="https://www.youtube.com/embed/OvnF2f2MZug?si=JvLczgeVjfBz-pgP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="media-card">
                <iframe  height="315" src="https://www.youtube.com/embed/OvnF2f2MZug?si=JvLczgeVjfBz-pgP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
