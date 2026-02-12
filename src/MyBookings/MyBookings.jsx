import { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bookings");
      if (saved) {
        const parsed = JSON.parse(saved);
        setBookings(Array.isArray(parsed) ? parsed : []);
      }
    } catch (err) {
      console.error("Failed to load bookings:", err);
      setBookings([]);
    }
  }, []);

  if (bookings.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" color="text.secondary">
          No Bookings Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 3, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        My Bookings
      </Typography>

      {bookings.map((booking, index) => {
        const hospitalName =
          booking.hospitalName ||
          booking["Hospital Name"] ||
          booking.hospital ||
          "Unknown";

        const city = booking.city || booking.City || "";
        const state = booking.state || booking.State || "";

        const date = booking.date || booking.bookingDate || "—";
        const time = booking.time || booking.bookingTime || "—";

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
            <Typography variant="h3" gutterBottom>
              {hospitalName.toLowerCase()}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
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







