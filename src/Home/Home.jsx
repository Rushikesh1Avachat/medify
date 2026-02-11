import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";

function Home() {
  return (
    <Box component="main">
      {/* ✅ Cypress anchor – MUST be first */}
      <SearchBar />

      {/* ✅ Optional UI – Cypress ignores this */}
      <HeroSlider />
    </Box>
  );
}

export default Home;




