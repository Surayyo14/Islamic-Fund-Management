import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Team = () => {
  return (
    <section className="team">
      <div className="container container2">
        <div className="team-title">
          <h2>Our Expert Team </h2>
          <p>
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <div className="team-swiper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="team-item">
                <div className="team-img">
                  <img src="./images/team.png" alt="rasm" />
                </div>
                <div className="team-text">
                  <h2>Dr. Mezbah Uddin Ahmed</h2>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="team-user">
                    <a href="">
                      <img src="./images/telegram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/instagram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/facebook-02.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team-item">
                <div className="team-img">
                  <img src="./images/Showcase.png" alt="" />
                </div>
                <div className="team-text">
                  <h2>Dr. Mezbah Uddin Ahmed</h2>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="team-user">
                    <a href="">
                      <img src="./images/telegram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/instagram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/facebook-02.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-item">
                <div className="team-img">
                  <img src="./images/Showcase.png" alt="" />
                </div>
                <div className="team-text">
                  <h2>Dr. Mezbah Uddin Ahmed</h2>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="team-user">
                    <a href="">
                      <img src="./images/telegram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/instagram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/facebook-02.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-item">
                <div className="team-img">
                  <img src="./images/Showcase.png" alt="" />
                </div>
                <div className="team-text">
                  <h2>Dr. Mezbah Uddin Ahmed</h2>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                  </p>
                  <div className="team-user">
                    <a href="">
                      <img src="./images/telegram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/instagram.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/facebook-02.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="./images/twitter.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
