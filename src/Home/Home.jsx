// src/Home/Home.jsx
import { Box, Container } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar'; // ← double-check this path

function Home() {
  return (
    <Box component="main">
      {/* You can keep HeroSlider or remove it temporarily */}
      {/* <HeroSlider /> */}

      {/* This line is CRITICAL for tests 1–4 */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <SearchBar />
      </Container>

      {/* Do NOT add any other content here yet */}
      {/* Add sections only AFTER tests pass */}
    </Box>
  );
}
export default Home