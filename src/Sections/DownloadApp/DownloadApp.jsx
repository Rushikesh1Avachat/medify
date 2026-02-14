import { Box, Container, Typography, Grid, Button } from "@mui/material";
import mobileMockup from "../../assets/mobile.jpg";
import googlePlay from "../../assets/playstore.jpg";   // should be only play icon
import appleStore from "../../assets/apple-logo.jpg";  // should be only apple icon
import styles from "./DownloadApp.module.css";

export default function DownloadApp() {
  return (
    <Box className={styles.sectionWrapper}>
      <Container maxWidth="xl" className={styles.containerFix}>
        <Grid container alignItems="center">

          {/* LEFT SIDE - MOBILE IMAGE */}
          <Grid item xs={12} md={6} className={styles.leftGrid}>
            <div className={styles.imageContainer}>
              <img
                src={mobileMockup}
                alt="Medify App"
                className={styles.mobileImg}
              />
            </div>
          </Grid>

          {/* RIGHT SIDE - CONTENT */}
          <Grid item xs={12} md={6} className={styles.rightGrid}>
            <Box className={styles.contentWrapper}>

              <Typography className={styles.mainTitle}>
                Download the <br />
                <span>Medify</span> App
              </Typography>

              <Typography className={styles.description}>
                Get the link to download the app
              </Typography>

              <form
                className={styles.inputRow}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.phoneInputGroup}>
                  <span className={styles.countryCode}>+91</span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className={styles.inputField}
                  />
                </div>

                <Button
                  type="submit"
                  className={styles.sendBtn}
                  disableElevation
                >
                  Send SMS
                </Button>
              </form>

              {/* STORE BUTTONS */}
              <div className={styles.storeLinks}>
                <button className={styles.storeBtn}>
                  <img src={googlePlay} alt="Google Play" />
                  <span>Google Play</span>
                </button>

                <button className={styles.storeBtn}>
                  <img src={appleStore} alt="App Store" />
                  <span>App Store</span>
                </button>
              </div>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
