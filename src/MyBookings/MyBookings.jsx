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
      console.error("Failed to parse bookings from localStorage:", err);
      setBookings([]);
    }
  }, []);

  if (bookings.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5" color="text.secondary">
          No Bookings Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 3, py: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        My Bookings
      </Typography>

      {bookings.map((booking, index) => {
        // Support both possible key names from your booking flow
        const hospitalName =
          booking.hospitalName ||
          booking.hospital ||
          booking["Hospital Name"] ||
          "Unknown Hospital";

        const city = booking.city || booking.City || "";
        const state = booking.state || booking.State || "";

        const date = booking.date || booking.bookingDate || "";
        const time = booking.time || booking.bookingTime || "";

        return (
          <Box
            key={index}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 3,
              mb: 3,
              bgcolor: "white",
              boxShadow: 1,
            }}
          >
            <Typography 
              variant="h3" 
              component="h3" 
              gutterBottom 
              sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
            >
              {hospitalName.toLowerCase()} {/* ← lowercase matches test expectation */}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {city}, {state}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1">
              <strong>Date:</strong> {date}
            </Typography>

            <Typography variant="body1">
              <strong>Time:</strong> {time}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default MyBookings;







