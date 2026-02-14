import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';
import medifyLogo from '../../assets/logo.jpg'; 

// Social icons
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
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialCircle}>
                <img src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className={styles.linksGrid}>
            <ul className={styles.linkList}>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/pricing">Our Pricing</Link></li>
              <li><Link href="/gallery">Our Gallery</Link></li>
              <li><Link href="/appointment">Appointment</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
            <ul className={styles.linkList}>
              <li><Link href="/services/orthology">Orthology</Link></li>
              <li><Link href="/services/neurology">Neurology</Link></li>
              <li><Link href="/services/dental-care">Dental Care</Link></li>
              <li><Link href="/services/ophthalmology">Ophthalmology</Link></li>
              <li><Link href="/services/cardiology">Cardiology</Link></li>
            </ul>
            <ul className={styles.linkList}>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/pricing">Our Pricing</Link></li>
              <li><Link href="/gallery">Our Gallery</Link></li>
              <li><Link href="/appointment">Appointment</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Line & Copyright */}
        <div className={styles.bottomSection}>
          <p>Copyright ©2023 Surya Nursing Home. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
