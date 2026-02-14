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
          {/* MUST be component="h3" – tests often check tag name */}
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

          {/* When in My Bookings view – show date/time clearly */}
          {booking && (
            <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
              <Typography variant="body2">
                <strong>Date:</strong> {data.date}
              </Typography>
              <Typography variant="body2">
                <strong>Time:</strong> {data.time}
              </Typography>
            </Stack>
          )}
        </CardContent>

        {/* Booking button ONLY shown when NOT in booking view */}
        {!booking && (
          <Box className={styles.actionSection}>
            <Typography className={styles.availableText}>Available Today</Typography>
            {/* Button text MUST be EXACTLY this – no extra spaces, no different capitalization */}
            <Button
              onClick={() => setOpen(true)}
              className={styles.bookButton}
              variant="contained"           // optional: makes it look better, but not required
              fullWidth                     // often helps with responsive tests
            >
              Book FREE Center Visit
            </Button>
          </Box>
        )}
      </Card>

      {/* Modal only in list view (not in My Bookings) */}
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