import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
const Comments = () => {
  return (
    <section className="comments">
      <div className="container">
        <div className="comments-title">
          <h2>What students say</h2>
          <p>
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <div className="comments-cards">
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="comments-card">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>
            <div className="comments-card-wrap">
              <div className="comments-card-img">
                <img src="./images/comments1.png" alt="" />
              </div>
              <div className="comments-card-item">
                <h3>Finlay Kirk</h3>
                <p>Web designer</p>
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

export default Comments;
