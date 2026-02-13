// src/sections/DownloadApp.jsx
import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function DownloadApp() {
  return (
    <Box sx={{ bgcolor: "#eaf2ff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1a3c5a" }}
            >
              Download the Medify App
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              Get the link to download the app
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "#000", color: "white", px: 6 }}
              >
                Google Play
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "#000", color: "white", px: 6 }}
              >
                App Store
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Replace with actual mockup images when available */}
            <Box sx={{ textAlign: "center", color: "text.secondary" }}>
              [Phone mockup images placeholder]
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}