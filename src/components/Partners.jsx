import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // CSS-ni ham import qilish kerak!

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-title">
          <h2>Our Partners and Clients</h2>
        </div>
        <div className="partners-swiper">
          <div className="partners-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img src="./images/partners1.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners2.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners3.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners4.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners1.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners2.png" alt="rasm" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="partners-wrapper2">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img src="./images/partners1.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners2.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners3.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners4.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners1.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners2.png" alt="rasm" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="./images/partners3.png" alt="rasm" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
