// src/sections/OurFamilies.jsx
import { Container, Typography, Grid, Paper } from '@mui/material';

const stats = [
  { count: "5000+", label: "Happy Customers" },
  { count: "300+",  label: "Qualified Doctors" },
  { count: "1000+", label: "Medical Centers" },
  { count: "700+",  label: "Laboratories" },
];

export default function OurFamilies() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 6, color: "#1a3c5a" }}
      >
        Our Families
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stats.map((item, i) => (
          <Grid item xs={6} sm={3} key={i}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <Typography variant="h3" fontWeight="bold" color="#2aa7ff">
                {item.count}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" mt={1}>
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}