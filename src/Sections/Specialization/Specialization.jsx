import { Container, Typography, Box, Button } from "@mui/material";
import styles from "./Specialization.module.css";

import drugStore from "../../assets/Drugstore.jpg";
import primaryCare from "../../assets/primary-care.jpg";
import cardiology from "../../assets/cardiology.jpg";
import mri from "../../assets/mri.jpg";
import bloodTest from "../../assets/blood-test.jpg";
import psychologist from "../../assets/piscologist.jpg";
import laboratory from "../../assets/Hospital.jpg";
import xray from "../../assets/X-Ray.jpg";

const items = [
  { title: "Dentistry", img: drugStore },
  { title: "Primary Care", img: primaryCare },
  { title: "Cardiology", img: cardiology },
  { title: "MRI Resonance", img: mri },
  { title: "Blood Test", img: bloodTest },
  { title: "Psychologist", img: psychologist },
  { title: "Laboratory", img: laboratory },
  { title: "X-Ray", img: xray },
];

export default function Specialization() {
  return (
    <Box className={styles.wrapper}>
      <Container maxWidth="lg" style={ { marginTop:'10px' , fontSize: '20px' , fontWeight:"bold"}}>
        <Typography className={styles.sectionHeading}>
          Find By Specialisation
        </Typography>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconBox}>
                <img src={item.img} alt={item.title} />
              </div>
              <Typography className={styles.cardTitle}>
                {item.title}
              </Typography>
            </div>
          ))}
        </div>

        <Box className={styles.buttonWrapper}>
          <Button
            variant="contained"
            disableElevation
            className={styles.viewAllBtn}
          >
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
