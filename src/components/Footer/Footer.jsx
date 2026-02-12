import { Box, Container, Typography, Grid } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1B3C74", color: "white", py: 4, mt: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Medify
            </Typography>
            <Typography variant="body2">
              Trusted platform for booking medical appointments.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">Find Doctors</Typography>
            <Typography variant="body2">Hospitals</Typography>
            <Typography variant="body2">Medicines</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              support@medify.com
            </Typography>
            <Typography variant="body2">
              +1 234 567 890
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4 }}
        >
          © 2026 Medify. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
