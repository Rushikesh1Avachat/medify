import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import banner1 from "../../assets/hero_doctors.jpg";
import banner2 from "../../assets/hero_image.jpg";

const HeroSlider = () => {
  return (
    <Box>
      <Swiper>
        <SwiperSlide>
          <img
            src={banner1}
            alt="Find medical centers near you"
            style={{ width: "100%", display: "block" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={banner2}
            alt="Book free medical appointments"
            style={{ width: "100%", display: "block" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
