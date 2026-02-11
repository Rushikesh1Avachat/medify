// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import SearchBar from '../components/SearchBar/SearchBar';

 function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      {/* MUST be here, visible immediately – tests look for it on home page */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>

      {/* You can add other sections BELOW this – but keep SearchBar always visible */}
    </Box>
  );
}
export default Home