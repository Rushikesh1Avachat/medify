import { Box, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.jpg'; 

export default function NavBar() {
  return (
    <header className={styles.header}>
      {/* Blue Top Bar */}
      <Box className={styles.topBar}>
        <Typography variant="body2" className={styles.topBarText}>
          The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </Typography>
      </Box>

      {/* Main Navbar */}
      <nav className={styles.nav}>
        <Container maxWidth="xl">
          <Stack 
            direction="row" 
            spacing={2} 
            alignItems="center" 
            justifyContent="space-between"
            py={1.5}
          >
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Medify" height={27} />
            </Link>

            {/* Navigation Links and Booking Button */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Link to="/find-doctors" className={styles.navLink}>Find Doctors</Link>
              <Link to="/hospitals" className={styles.navLink}>Hospitals</Link>
              <Link to="/medicines" className={styles.navLink}>Medicines</Link>
              <Link to="/surgeries" className={styles.navLink}>Surgeries</Link>
              <Link to="/software" className={styles.navLink}>Software for Provider</Link>
              <Link to="/facilities" className={styles.navLink}>Facilities</Link>
              
              <Link to="/my-bookings" style={{ textDecoration: 'none' }}>
                <button className={styles.bookingBtn}>My Bookings</button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </nav>
    </header>
  );
}