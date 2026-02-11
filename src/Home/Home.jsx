import { Box, Container } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";

function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      {/* ✅ Cypress REQUIRED location */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <SearchBar />
      </Container>
    </Box>
  );
}

export default Home;



