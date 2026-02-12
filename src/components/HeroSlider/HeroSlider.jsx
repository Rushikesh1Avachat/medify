// src/components/HeroSlider/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./HeroSlider.css";

function HeroSlider() {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide slide-1">
            <div className="hero-content">
              <h1>
                Skip the travel! <br />
                Take Online Doctor Consultation
              </h1>
              <p>
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </p>
              <button>Find Doctors</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide slide-2">
            <div className="hero-content">
              <h1>Consult Top Doctors Anytime, Anywhere</h1>
              <p>
                Get medical advice from trusted healthcare professionals at
                your convenience.
              </p>
              <button>Book Appointment</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
