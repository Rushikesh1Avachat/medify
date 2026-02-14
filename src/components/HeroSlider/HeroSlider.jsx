// src/components/HeroSlider/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from './HeroSlider.module.css';

// Replace with your actual asset paths
import slideDoctor from '../../assets/hero.jpg';          // doctor / medical image on right
import slideBg from '../../assets/div.swiper-pagination.jpg';  // subtle background pattern

const slides = [
  {
    title: "Skip the travel! Find",
    highlight: "Online Medical Centers",
    description:
      "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
    buttonText: "Find Centers",
    image: slideDoctor,
  },
  // Optional second slide (uncomment if needed)
  // {
  //   title: "Instant Appointments",
  //   highlight: "With Top Doctors",
  //   description: "Book in seconds – no waiting, no hassle.",
  //   buttonText: "Book Now",
  //   image: anotherImage,
  // },
];

export default function HeroSlider() {
  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              {/* Subtle background pattern */}
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${slideBg})` }}
              />

              <div className={styles.contentContainer}>
                {/* Left text content */}
                <div className={styles.textContent}>
                  <h1 className={styles.title}>
                    {slide.title}
                    <span className={styles.highlight}>{slide.highlight}</span>
                  </h1>

                  <p className={styles.description}>{slide.description}</p>

                  <button className={styles.ctaButton}>
                    {slide.buttonText}
                  </button>
                </div>

                {/* Right doctor/medical image */}
                <div className={styles.imageContainer}>
                  <img
                    src={slide.image}
                    alt="Medical Professional"
                    className={styles.doctorImage}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}