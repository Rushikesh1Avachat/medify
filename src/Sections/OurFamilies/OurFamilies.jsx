import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import statsImage from "../../assets/our-families-banner.jpg";

const OurFamilies = () => {
  return (
    <Box sx={{ bgcolor: '#f4f9ff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: '#00a3ff', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: 1,
                mb: 1 
              }}
            >
              Caring for the health of you and your family.
            </Typography>
            
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#2d4271', 
                fontWeight: 900, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' } 
              }}
            >
              Our Families
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6b778d', 
                lineHeight: 1.8, 
                fontSize: '1.1rem',
                maxWidth: '540px' 
              }}
            >
              We will work with you to develop individualised care plans, 
              including management of chronic diseases. If we cannot assist, 
              we can provide referrals or advice about the type of practitioner 
              you require. We treat all enquiries sensitively and in the strictest confidence.
            </Typography>
          </Grid>

          {/* Right Side: The Banner Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
 <Box
  component="img"
  src={statsImage}
  alt="Our Families Stats"
  sx={{
    width: "100%",
    maxWidth: "530px",
    height: "auto",
    display: "block"
  }}
/>

          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default OurFamilies;