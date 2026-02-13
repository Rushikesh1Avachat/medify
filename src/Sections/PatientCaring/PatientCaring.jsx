// src/sections/PatientCaring.jsx
import { Container, Grid, Typography, Box } from '@mui/material';

// Replace with your actual image
import caringImg from '../../assets/Ambulance.jpg'; // or PatientCaring.jpg if you have it

export default function PatientCaring() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={caringImg}
            alt="Patient Caring"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#1a3c5a" }}
          >
            Patient Caring
          </Typography>
          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            We are committed to providing compassionate, high-quality care to every patient.
            Our team works tirelessly to ensure your comfort, safety, and speedy recovery.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}