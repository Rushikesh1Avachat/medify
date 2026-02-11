// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroSlider from '../components/HeroSlider/HeroSlider';

 function Home() {
  return (
    <Box component="main">
      {/* HeroSlider – optional, but keep it */}
      <HeroSlider />

      {/* CRITICAL: SearchBar MUST be here and always visible */}
      {/* Tests 1–4 look for #city and #searchBtn on home page */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>

      {/* Add other sections BELOW this line */}
    </Box>
  );
}
export default Home