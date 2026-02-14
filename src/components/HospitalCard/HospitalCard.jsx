import { Card, CardContent, Typography, Button, Box, Stack } from "@mui/material";
import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import styles from "./HospitalCard.module.css";
import hospitalIcon from "../../assets/hospitalicon.jpg";

export default function HospitalCard({ data, booking = false }) {
  const [open, setOpen] = useState(false);

  if (!data) return null;

  return (
    <>
      <Card className={styles.card}>
        <Box className={styles.iconContainer}>
          <img src={hospitalIcon} alt="Hospital" width="80" />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <h3 className={styles.hospitalName}>{data["Hospital Name"]}</h3>
          <Typography variant="body2" className={styles.locationText}>
            {data.City}, {data.State}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            Smilessence Center for Advanced Dentistry + 1 more
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography className={styles.freeTag}>FREE</Typography>
            <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
              ₹500
            </Typography>
            <Typography variant="body2">Consultation fee at clinic</Typography>
          </Stack>

          {booking && (
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Box className={styles.timeBadge}>{data.time}</Box>
              <Box className={styles.dateBadge}>{data.date}</Box>
            </Stack>
          )}
        </CardContent>

        {!booking && (
          <Box className={styles.actionSection}>
            <Typography className={styles.availableText}>Available Today</Typography>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              className={styles.bookButton}
            >
              Book FREE Center Visit
            </Button>
          </Box>
        )}
      </Card>

      {!booking && (
        <BookingModal open={open} onClose={() => setOpen(false)} hospital={data} />
      )}
    </>
  );
}
