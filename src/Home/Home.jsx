// src/Home/Home.jsx
import { Box, Container, Typography, Grid } from '@mui/material';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import SearchBar from '../components/SearchBar/SearchBar';
import Accordion from '../components/Accordion/Accordion';

 function Home() {
  return (
    <Box component="main">
      <HeroSlider />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Search bar must be here for tests to see #state, #city, #searchBtn */}
        <SearchBar />

        {/* Placeholder quick links – replace with IconCard later */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h5" align="center" gutterBottom>
            You may be looking for
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            {['Doctors', 'Hospitals', 'Medicines', 'Labs', 'Ambulance'].map(item => (
              <Grid item xs={6} sm={4} md={2} key={item}>
                <Box sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: 3, textAlign: 'center', bgcolor: 'white' }}>
                  <Typography variant="h3">{item.charAt(0)}</Typography>
                  <Typography variant="subtitle1">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
            Frequently Asked Questions
          </Typography>
          <Accordion />
        </Box>
      </Container>
    </Box>
  );
}
export default Home