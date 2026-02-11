// src/components/Footer/Footer.jsx
import { Box, Typography, Grid, Link } from '@mui/material';
import styles from './Footer.module.css';

import facebook from '../../assets/fb.jpg';       // ← your downloaded FB icon
import twitter from '../../assets/twitter.jpg';         // ← your downloaded Twitter/X icon
import youtube from '../../assets/yt.jpg';         // ← your downloaded YouTube icon
import pinterest from '../../assets/pinterest.jpg';     // ← your downloaded Pinterest icon

 function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Box className={styles.container}>
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={styles.brandTitle}>
              Medify
            </Typography>
            <Typography variant="body2" className={styles.brandDesc}>
              Medify is a trusted platform to find medical centers and book
              appointments easily across the USA.
            </Typography>
          </Grid>

          {/* About */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" className={styles.columnTitle}>
              About
            </Typography>
            <Link href="#" underline="hover" className={styles.link}>
              About Us
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Careers
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Blog
            </Link>
          </Grid>

          {/* Services */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" className={styles.columnTitle}>
              Services
            </Typography>
            <Link href="#" underline="hover" className={styles.link}>
              Hospitals
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Doctors
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Medicines
            </Link>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" className={styles.columnTitle}>
              Support
            </Typography>
            <Link href="#" underline="hover" className={styles.link}>
              Help Center
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Contact Us
            </Link>
            <Link href="#" underline="hover" className={styles.link}>
              Privacy Policy
            </Link>
          </Grid>

      
        

            {/* Social Icons – placed below app badges */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5, opacity: 0.9 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                <Link href="#" underline="none">
                  <img src={facebook} alt="Facebook" className={styles.socialIcon} />
                </Link>
                <Link href="#" underline="none">
                  <img src={twitter} alt="Twitter" className={styles.socialIcon} />
                </Link>
                <Link href="#" underline="none">
                  <img src={youtube} alt="YouTube" className={styles.socialIcon} />
                </Link>
                <Link href="#" underline="none">
                  <img src={pinterest} alt="Pinterest" className={styles.socialIcon} />
                </Link>
              </Box>
            </Box>
          </Grid>
   

        {/* Copyright */}
        <Box className={styles.copyright}>
          © 2026 Medify. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}
export default Footer