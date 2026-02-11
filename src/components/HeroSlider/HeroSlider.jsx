// src/components/HeroSlider/HeroSlider.jsx
import { Box, Typography, Button, Container } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import styles from './HeroSlider.module.css';

// Use your own image
import heroImg from '../../assets/hero_doctors.jpg';

 function HeroSlider() {
  return (
    <Box className={styles.hero}>
      <Box className={styles.overlay} />

      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.content}>
          <Typography variant="h1" className={styles.title}>
            Skip the travel!
            <br />
            Find Online <span className={styles.highlight}>Medical Centers</span>
          </Typography>

          <Typography variant="h6" className={styles.subtitle}>
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
          </Typography>

          <Button variant="contained" size="large" className={styles.cta}>
            Find Centers
          </Button>
        </Box>

        <Box className={styles.imageContainer}>
          <img src={heroImg} alt="Doctors" className={styles.heroImage} />
        </Box>
      </Container>

      <Box className={styles.searchWrapper}>
        <SearchBar />
      </Box>
    </Box>
  );
}
export default HeroSlider