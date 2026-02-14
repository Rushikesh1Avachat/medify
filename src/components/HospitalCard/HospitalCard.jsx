// src/components/HospitalCard/HospitalCard.jsx
import { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Stack } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";
import styles from "./HospitalCard.module.css";
import hospitalIcon from "../../assets/hospitalicon.jpg";

export default function HospitalCard({ data, booking = false }) {
  const [open, setOpen] = useState(false);

  if (!data) return null;

  const handleBookingConfirm = (date, time) => {
    const bookingData = {
      hospitalName: data["Hospital Name"],
      city: data.City,
      state: data.State,
      date,
      time,
    };
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, bookingData]));
    setOpen(false);
  };

  return (
    <>
      <Card className={styles.card}>
        <Box className={styles.iconContainer}>
          <img src={hospitalIcon} alt="Hospital" width="80" />
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <Typography component="h3" className={styles.hospitalName}>
            {data["Hospital Name"]}
          </Typography>

          <Typography variant="body2" className={styles.locationText}>
            {data.City}, {data.State}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography className={styles.freeTag}>FREE</Typography>
            <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
              ₹500
            </Typography>
            <Typography variant="body2">Consultation fee at clinic</Typography>
          </Stack>

          {booking && (
            <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
              <Typography variant="body2">Date: {data.date}</Typography>
              <Typography variant="body2">Time: {data.time}</Typography>
            </Stack>
          )}
        </CardContent>

        {!booking && (
          <Box className={styles.actionSection}>
            <Typography className={styles.availableText}>Available Today</Typography>
            <Button
              onClick={() => setOpen(true)}
              className={styles.bookButton}
            >
              Book FREE Center Visit
            </Button>
          </Box>
        )}
      </Card>

      {!booking && (
        <BookingModal
          open={open}
          onClose={() => setOpen(false)}
          hospital={data}
          onConfirm={handleBookingConfirm}
        />
      )}
    </>
  );
}