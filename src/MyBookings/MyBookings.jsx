import { useEffect, useState } from "react";
import { Typography, Box, Divider } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bookings");
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading bookings", error);
      setBookings([]);
    }
  }, []);

  if (!bookings || bookings.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5" color="text.secondary">
          No Bookings Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Bookings
      </Typography>

      {bookings.map((booking, index) => {
        // Handle both naming formats
        const hospitalName =
          booking.hospitalName || booking["Hospital Name"];

        const city = booking.city || booking.City;
        const state = booking.state || booking.State;

        const date = booking.date || booking.bookingDate;
        const time = booking.time || booking.bookingTime;

        return (
          <Box
            key={index}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 3,
              mb: 3,
              bgcolor: "white",
            }}
          >
            <Typography variant="h3" component="h3" gutterBottom>
              {hospitalName}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              {city}, {state}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography>
              <strong>Date:</strong> {date}
            </Typography>

            <Typography>
              <strong>Time:</strong> {time}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default MyBookings;






