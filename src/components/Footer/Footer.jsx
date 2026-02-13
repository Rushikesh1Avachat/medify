import React from 'react';
import styles from './Footer.module.css';
import medifyLogo from '../../assets/logo.jpg'; 

// Import your social icon images
import fbIcon from '../../assets/fb.jpg';
import twitterIcon from '../../assets/twitter.jpg';
import youtubeIcon from '../../assets/yt.jpg';
import pinterestIcon from '../../assets/pinterest.jpg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          {/* Left Column: Logo & Socials */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
               <img src={medifyLogo} alt="Medify Logo" className={styles.logoImg} />
            </div>
            
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialCircle}>
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="#" className={styles.socialCircle}>
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" className={styles.socialCircle}>
                <img src={youtubeIcon} alt="Youtube" />
              </a>
              <a href="#" className={styles.socialCircle}>
                <img src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className={styles.linksGrid}>
            <ul className={styles.linkList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Pricing</a></li>
              <li><a href="#">Our Gallery</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <ul className={styles.linkList}>
              <li><a href="#">Orthology</a></li>
              <li><a href="#">Neurology</a></li>
              <li><a href="#">Dental Care</a></li>
              <li><a href="#">Ophthalmology</a></li>
              <li><a href="#">Cardiology</a></li>
            </ul>
            <ul className={styles.linkList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Pricing</a></li>
              <li><a href="#">Our Gallery</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Line & Copyright */}
        <div className={styles.bottomSection}>
          <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}