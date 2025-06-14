import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  return (
    <section className="partners">
      <div>
        <div className="partners-title">
          <h2>Our Partners and Clients</h2>
        </div>
        <div className="partners-swiper">
          <div className="partners-wrapper">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners4.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners4.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="partners-wrapper2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners4.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners4.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners1.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners2.png" alt="rasm" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partners3.png" alt="rasm" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
