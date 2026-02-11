import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./HeroSlider.module.css";

 function HeroSlider() {
  return (
    <Swiper loop autoplay>
      <SwiperSlide>
        <img src="/assets/hero1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/hero2.png" />
      </SwiperSlide>
    </Swiper>
  );
}
export default HeroSlider