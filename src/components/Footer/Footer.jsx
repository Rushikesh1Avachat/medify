import styles from "./Footer.module.css";
import apple from "../../assets/apple-logo.jpg";
import pinterest from "../../assets/pinterest.jpg";

 function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>Medify</h2>
          <p>
            Medify is a trusted platform to find medical centers and
            book appointments easily across the USA.
          </p>
        </div>

        <div className={styles.links}>
          <h4>About</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div className={styles.links}>
          <h4>Services</h4>
          <p>Hospitals</p>
          <p>Doctors</p>
          <p>Medicines</p>
        </div>

        <div className={styles.links}>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>

        <div className={styles.apps}>
          <img src={apple} alt="Apple Store" />
          <img src={pinterest} alt="Google Play" />
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Medify. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer