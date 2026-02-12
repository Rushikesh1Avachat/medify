import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1B3C74", color: "white", py: 6, mt: "auto" }}>
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
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <li><Link component={RouterLink} to="/" color="inherit">Find Doctors</Link></li>
              <li><Link component={RouterLink} to="/" color="inherit">Hospitals</Link></li>
              <li><Link component={RouterLink} to="/" color="inherit">Medicines</Link></li>
              <li><Link component={RouterLink} to="/my-bookings" color="inherit">My Bookings</Link></li>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">support@medify.com</Typography>
            <Typography variant="body2">+91 98765 43210</Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 5 }}>
          © {new Date().getFullYear()} Medify. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
