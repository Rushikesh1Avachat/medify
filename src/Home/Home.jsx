import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchBar from "../components/SearchBar/SearchBar";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      {/* Cypress NEEDS this immediately */}
      <HeroSlider/>
      <SearchBar />

      {/* rest of your home page */}
    </Box>
  );
}

export default Home;
