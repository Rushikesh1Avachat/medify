// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroSlider from '../components/HeroSlider/HeroSlider';

 function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      {/* CRITICAL: SearchBar MUST be here — tests look for it on home page */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>

      {/* You can add other sections BELOW this line later */}
    </Box>
  );
}
export default Home