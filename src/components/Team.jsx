// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// const Team = () => {
//   return (
//     <section className="team">
//       <div className="container container2">
//         <div className="team-title">
//           <h2>Our Expert Team </h2>
//           <p>
//             Our team consists of seasoned professionals with extensive
//             experience in Islamic finance and management. Each member brings a
//             unique set of skills and expertise.
//           </p>
//         </div>
//         <div className="team-swiper">
//           <Swiper
//             spaceBetween={50}
//             slidesPerView={1}
//             onSlideChange={() => console.log("slide change")}
//             onSwiper={(swiper) => console.log(swiper)}
//           >
//             <SwiperSlide>
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="./images/team.png" alt="rasm" />
//                 </div>
//                 <div className="team-text">
//                   <h2>Dr. Mezbah Uddin Ahmed</h2>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters.
//                   </p>
//                   <div className="team-user">
//                     <a href="">
//                       <img src="./images/telegram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/instagram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/facebook-02.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/twitter.png" alt="" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="./images/Showcase.png" alt="" />
//                 </div>
//                 <div className="team-text">
//                   <h2>Dr. Mezbah Uddin Ahmed</h2>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters.
//                   </p>
//                   <div className="team-user">
//                     <a href="">
//                       <img src="./images/telegram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/instagram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/facebook-02.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/twitter.png" alt="" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="./images/Showcase.png" alt="" />
//                 </div>
//                 <div className="team-text">
//                   <h2>Dr. Mezbah Uddin Ahmed</h2>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters.
//                   </p>
//                   <div className="team-user">
//                     <a href="">
//                       <img src="./images/telegram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/instagram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/facebook-02.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/twitter.png" alt="" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="./images/Showcase.png" alt="" />
//                 </div>
//                 <div className="team-text">
//                   <h2>Dr. Mezbah Uddin Ahmed</h2>

//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters.
//                   </p>
//                   <div className="team-user">
//                     <a href="">
//                       <img src="./images/telegram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/instagram.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/facebook-02.svg" alt="" />
//                     </a>
//                     <a href="">
//                       <img src="./images/twitter.png" alt="" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Team = () => {
  return (
    <section className="team">
      <div>
        <div className="team-title">
          <h2>Our Expert Team</h2>
          <p>
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <div className="team-swiper">
          <Swiper
            spaceBetween={30} // Slaydlar orasidagi masofa
            slidesPerView={1.5} // 1 ta asosiy slayd va 2 ta qisman ko'rinadigan slayd
            centeredSlides={true} // Markazga joylashish
            loop={true} // Slaydlarga aylanishni qayta boshlash
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1, // Kichik ekranlarda faqat bitta slayd
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5, // O'rta ekranlarda bitta va yarim slayd
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.5, // Katta ekranlarda 3 slayd
                spaceBetween: 30,
              },
            }}
          >
           <SwiperSlide className="container5">
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
            <SwiperSlide className="container5">
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
            <SwiperSlide className="container5">
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
            <SwiperSlide className="container5">
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
            {/* Qolgan SwiperSlide larni shu tarzda davom ettiring */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
