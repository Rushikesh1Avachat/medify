// src/components/HeroSlider/HeroSlider.jsx
import { Box, Typography, Button, Container } from "@mui/material";
import styles from "./HeroSlider.module.css";
import heroImg from "../../assets/hero_doctors.jpg";

function HeroSlider() {
  return (
    <Box className={styles.hero}>
      <Box className={styles.overlay} />

      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.content}>
          <Typography variant="h2">
            Skip the travel!
            <br />
            Find Online <span>Medical Centers</span>
          </Typography>

          <Typography variant="h6">
            Connect instantly with a 24x7 specialist.
          </Typography>

          <Button variant="contained">Find Centers</Button>
        </Box>

        <img src={heroImg} alt="Doctors" />
      </Container>
    </Box>
  );
}

export default HeroSlider;
