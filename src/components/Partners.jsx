// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css"; // CSS-ni ham import qilish kerak!

// const Partners = () => {
//   return (
//     <section className="partners">
//       <div className="container">
//         <div className="partners-title">
//           <h2>Our Partners and Clients</h2>
//         </div>
//         <div className="partners-swiper">
//           <div className="partners-wrapper">
//             <Swiper
//             modules={[Autoplay]}
//               spaceBetween={50}
//               slidesPerView={4}
//               loop={true}
//               autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//               }}
//               onSlideChange={() => console.log("slide change")}
//               onSwiper={(swiper) => console.log(swiper)}
//             >
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners1.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners2.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners3.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners4.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners1.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners2.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <div className="partners-wrapper2">
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={4}
//               onSlideChange={() => console.log("slide change")}
//               onSwiper={(swiper) => console.log(swiper)}
//             >
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners1.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners2.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners3.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners4.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners1.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners2.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div>
//                   <img src="./images/partners3.png" alt="rasm" />
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default Partners;

import React from "react";
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
