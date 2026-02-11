// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroSlider from '../components/HeroSlider/HeroSlider';
function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      {/* CRITICAL: SearchBar MUST be here — tests look for #state, #city, #searchBtn on "/" */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>

      {/* Add other sections BELOW this line only */}
    </Box>
  );
}

export default Home