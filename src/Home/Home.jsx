import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";

function Home() {
  return (
    <Box component="main">
      {/* ✅ Cypress anchor – DO NOT MOVE */}
      <SearchBar />

      {/* Optional UI */}
      <HeroSlider />
    </Box>
  );
}

export default Home;




