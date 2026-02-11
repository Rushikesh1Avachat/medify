// src/components/NavBar/NavBar.jsx
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo.jpg'; // your downloaded logo

 function NavBar() {
  const isMobile = useMediaQuery('(max-width:960px)');

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(12px)',
        py: 1,
      }}
    >
      <Toolbar sx={{ maxWidth: 1440, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, justifyContent: 'space-between' }}>
        {/* Logo + text side by side */}
        <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
          <img src={logo} alt="Medify" style={{ height: 40, width: 'auto' }} />
          <Typography variant="h5" fontWeight="bold" color="#2AA7FF" sx={{ letterSpacing: '-0.5px' }}>
            Medify
          </Typography>
        </Box>

        {/* Desktop links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', color: '#333', '&:hover': { color: '#2AA7FF' } }}>
              Find Doctors
            </Button>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', color: '#333', '&:hover': { color: '#2AA7FF' } }}>
              Hospitals
            </Button>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', color: '#333', '&:hover': { color: '#2AA7FF' } }}>
              Medicines
            </Button>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', color: '#333', '&:hover': { color: '#2AA7FF' } }}>
              Surgeries
            </Button>
            <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', color: '#333', '&:hover': { color: '#2AA7FF' } }}>
              Software for Provider
            </Button>
            <Button
              component={RouterLink}
              to="/my-bookings"
              variant="contained"
              disableElevation
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: '#2AA7FF',
                color: 'white',
                borderRadius: '10px',
                px: 3,
                py: 1,
                minWidth: 140,
                boxShadow: '0 4px 12px rgba(42,167,255,0.25)',
                '&:hover': { backgroundColor: '#1e90e6', boxShadow: '0 6px 20px rgba(42,167,255,0.35)' },
              }}
            >
              My Bookings
            </Button>
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton color="primary" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NavBar