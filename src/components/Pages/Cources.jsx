import Header from "../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Infoservis from "../Infoservis";
import Counsel from "../Counsel";
import Footer from "../Footer";
const Cources = () => {
  return (
    <>
      <Header />
      <section className="cources-title">
        <div className="container">
          <h2>International educational programs</h2>
          <p>
            Al Muamalat Education's international study programs offer an
            in-depth learning experience at leading Islamic financial
            institutions around the world.
          </p>
        </div>
      </section>
      <section className="study">
        <div className="container">
          <div className="study-left">
            <h3>What you’ll learn </h3>
            <ul>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Gain a comprehensive understanding of Islamic finance principles
                and ethics.
              </li>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Build a portfolio with 10+ real-world projects in Islamic
                financial services.
              </li>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Learn to develop and manage Sharia-compliant financial products.
              </li>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Master key concepts in Islamic banking, investment, and wealth
                management.
              </li>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Understand the fundamentals of risk management in Islamic
                finance.
              </li>
              <li>
                <img src="./images/double.svg" alt="rasm" />
                Develop skills to work as an Islamic finance consultant.
              </li>
            </ul>
          </div>
          <div className="study-right">
            <h3>
              Why should you study at <br /> "AL-MUAMALAT"?
            </h3>
            <ul>
              <li>Lifetime access</li>
              <li>Video lessons</li>
              <li>Tests</li>
              <li>Projects</li>
              <li>Downloadable resources</li>
              <li>Access via mobile device</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cources-info">
        <div className="container">
          <h2>Brief information about the course</h2>
          <div className="cources-wrapper">
            <div className="cources-info-left">
              <h3>Videodarslar ▼</h3>
              <p>
                Lessons are posted on the platform in the form of videos, which
                can be viewed anytime and anywhere. Video lessons are updated.
              </p>
            </div>

            <div className="cources-info-right">
              <h3>Tasks ▼</h3>
              <p>
                Test tasks are given at the end of the module. Only students who
                successfully pass the test will be able to access the lessons in
                the next module.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="popular">
        <div className="container">
          <div className="popular-title">
            <h2>Most Popular Course</h2>
            <p>
              Expert guidance for managing funds in alignment with Islamic
              principles, helping you make informed, halal investment decisions.
            </p>
          </div>
          <div className="popular-cource-cards">
            <div className="popular-cource-card">
              <div className="popular-cource-card-img">
                <img
                  src="./images/popular-img1.png"
                  alt="popular cources img"
                />
              </div>
              <div className="popular-cource-card-info">
                <h3>Various versions have evolved daf</h3>
                <div className="popular-stars-wrap">
                  <div className="popular-stars">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>(20)</span>
                  </div>
                </div>
                <div className="popular-price">
                  <h2>$500</h2>
                  <button>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="popular-cource-card">
              <div className="popular-cource-card-img">
                <img
                  src="./images/popular-img1.png"
                  alt="popular cources img"
                />
              </div>
              <div className="popular-cource-card-info">
                <h3>Various versions have evolved daf</h3>
                <div className="popular-stars-wrap">
                  <div className="popular-stars">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>(20)</span>
                  </div>
                </div>
                <div className="popular-price">
                  <h2>$500</h2>
                  <button>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="popular-cource-card">
              <div className="popular-cource-card-img">
                <img
                  src="./images/popular-img1.png"
                  alt="popular cources img"
                />
              </div>
              <div className="popular-cource-card-info">
                <h3>Various versions have evolved daf</h3>
                <div className="popular-stars-wrap">
                  <div className="popular-stars">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>(20)</span>
                  </div>
                </div>
                <div className="popular-price">
                  <h2>$500</h2>
                  <button>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="popular">
        <div className="container">
          <div className="popular-title">
            <h2>Most Popular Course</h2>
            <p>
              Expert guidance for managing funds in alignment with Islamic
              principles, helping you make informed, halal investment decisions.
            </p>
          </div>

          {/* Swiper Container */}
          <div className="popular-swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={34}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".popular-swiper-button-next",
                prevEl: ".popular-swiper-button-prev",
              }}
              pagination={{
                el: ".popular-swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 34,
                },
              }}
              className="popular-courses-swiper"
            >
              <SwiperSlide>
                <div className="popular-cource-card">
                  <div className="popular-cource-card-img">
                    <img
                      src="./images/popular-img1.png"
                      alt="popular cources img"
                    />
                  </div>
                  <div className="popular-cource-card-info">
                    <h3>Islamic Finance Fundamentals</h3>
                    <div className="popular-stars-wrap">
                      <div className="popular-stars">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>(20)</span>
                      </div>
                    </div>
                    <div className="popular-price">
                      <h2>$500</h2>
                      <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="popular-cource-card">
                  <div className="popular-cource-card-img">
                    <img
                      src="./images/popular-img1.png"
                      alt="popular cources img"
                    />
                  </div>
                  <div className="popular-cource-card-info">
                    <h3>Sharia Banking Systems</h3>
                    <div className="popular-stars-wrap">
                      <div className="popular-stars">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>(35)</span>
                      </div>
                    </div>
                    <div className="popular-price">
                      <h2>$750</h2>
                      <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="popular-cource-card">
                  <div className="popular-cource-card-img">
                    <img
                      src="./images/popular-img1.png"
                      alt="popular cources img"
                    />
                  </div>
                  <div className="popular-cource-card-info">
                    <h3>Halal Investment Strategies</h3>
                    <div className="popular-stars-wrap">
                      <div className="popular-stars">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>(42)</span>
                      </div>
                    </div>
                    <div className="popular-price">
                      <h2>$650</h2>
                      <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="popular-cource-card">
                  <div className="popular-cource-card-img">
                    <img
                      src="./images/popular-img1.png"
                      alt="popular cources img"
                    />
                  </div>
                  <div className="popular-cource-card-info">
                    <h3>Islamic Wealth Management</h3>
                    <div className="popular-stars-wrap">
                      <div className="popular-stars">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>(28)</span>
                      </div>
                    </div>
                    <div className="popular-price">
                      <h2>$800</h2>
                      <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="popular-cource-card">
                  <div className="popular-cource-card-img">
                    <img
                      src="./images/popular-img1.png"
                      alt="popular cources img"
                    />
                  </div>
                  <div className="popular-cource-card-info">
                    <h3>Risk Management in Islamic Finance</h3>
                    <div className="popular-stars-wrap">
                      <div className="popular-stars">
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>(31)</span>
                      </div>
                    </div>
                    <div className="popular-price">
                      <h2>$550</h2>
                      <button>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <div className="popular-swiper-button-next"></div>
            <div className="popular-swiper-button-prev"></div>

            {/* Pagination */}
            <div className="popular-swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section className="payme">
        <div className="container">
          <div className="payme-card-left">
            <h2>Our Services</h2>
            <ul>
              <li>
                <img src="./images/payme-right.png" alt="rasm" />
                <div className="payme-left-list">
                  <h3>Space for creative ideas</h3>
                  <p>
                    Cyber Square nourishes young aspiring minds to get a clear
                    vision of their ideas. We guide them in analyzing and
                    building their vision and ideas into reality.
                  </p>
                </div>
              </li>
               <li>
                <img src="./images/payme-right.png" alt="rasm" />
                <div className="payme-left-list">
                  <h3>Space for creative ideas</h3>
                  <p>
                    Cyber Square nourishes young aspiring minds to get a clear
                    vision of their ideas. We guide them in analyzing and
                    building their vision and ideas into reality.
                  </p>
                </div>
              </li>
               <li>
                <img src="./images/payme-right.png" alt="rasm" />
                <div className="payme-left-list">
                  <h3>Space for creative ideas</h3>
                  <p>
                    Cyber Square nourishes young aspiring minds to get a clear
                    vision of their ideas. We guide them in analyzing and
                    building their vision and ideas into reality.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="payme-card-right">
            <h3>Payment </h3>
            <ul>
              <li>Space for creative ideas</li>
              <li>Engaging and fun curriculum</li>
              <li>Professional teaching methods</li>
              <li>Learn from AI & Data Science experts</li>
              <li>Courses by IIT, NIT, and IIM alumni</li>
              <li>UK certification upon completion</li>
              <li>Personalized one-to-one training</li>
            </ul>
            <button>Purchase Now</button>
          </div>
        </div>
      </section>
      <Infoservis/>
      <Counsel/>
      <Footer/>
    </>
  );
};

export default Cources;
