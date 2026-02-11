import { Box, Container } from "@mui/material";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchBar from "../components/SearchBar/SearchBar";

 function Home() {
  return (
    <Box>
      <HeroSlider />
      <Container sx={{ mt: -6, zIndex: 10, position: "relative" }}>
        <SearchBar />
      </Container>
    </Box>
  );
}
export default Home