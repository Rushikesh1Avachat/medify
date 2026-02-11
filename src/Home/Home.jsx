// src/Home/Home.jsx
import { Box, Container, Typography } from '@mui/material';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import Accordion from "../components/Accordion/Accordion"
function Home() {
  return (
    <Box component="main">
      {/* Hero + Search – most important for visual match */}
      <HeroSlider />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Quick links placeholder – can be replaced with IconCard later */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" align="center" gutterBottom>
            You may be looking for
          </Typography>
          {/* Simple grid – use IconCard/IconLayout when ready */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mt: 4 }}>
            {['Doctors', 'Hospitals', 'Medicines', 'Labs', 'Ambulance'].map(item => (
              <Box
                key={item}
                sx={{
                  width: 140,
                  p: 3,
                  border: '1px solid #e0e0e0',
                  borderRadius: 3,
                  textAlign: 'center',
                  bgcolor: 'white',
                }}
              >
                <Typography variant="h4">{item.charAt(0)}</Typography>
                <Typography variant="subtitle1">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ – using your Accordion */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
            Frequently Asked Questions
          </Typography>
          <Accordion />
        </Box>
      </Container>
    </Box>
  );
}
export default  Home