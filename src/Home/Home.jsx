// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroSlider from '../components/HeroSlider/HeroSlider';

function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      {/* CRITICAL: SearchBar MUST be rendered here, directly in DOM */}
      {/* No conditions, no hiding, no portals — tests look for it on "/" */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>

      {/* You can add other sections BELOW this — but keep SearchBar always present */}
    </Box>
  );
}
export default  Home