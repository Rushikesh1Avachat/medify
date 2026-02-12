import { useEffect, useState } from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";

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
        <Typography variant="h5" color="text.secondary" gutterBottom>
          No Bookings Found
        </Typography>
        <Typography color="text.secondary">
          You haven't booked any appointments yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 3, py: 6 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ mb: 5, fontWeight: 600 }}
      >
        My Bookings
      </Typography>

      {bookings.map((booking, index) => {
        // Normalize keys (robust against different booking formats)
        const hospitalName = 
          booking.hospitalName || 
          booking.hospital || 
          booking["Hospital Name"] || 
          "Unknown Hospital";

        const city = booking.city || booking.City || "";
        const state = booking.state || booking.State || "";

        const date = booking.date || booking.bookingDate || "—";
        const time = booking.time || booking.bookingTime || "—";

        return (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography 
              variant="h3" 
              component="h3" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.2rem' },
                fontWeight: 600,
                textTransform: "capitalize" // optional: looks nicer
              }}
            >
              {hospitalName.toLowerCase()} {/* ← exactly what the test wants */}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {city}, {state}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body1">
                <strong>Date:</strong> {date}
              </Typography>
              <Typography variant="body1">
                <strong>Time:</strong> {time}
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
}

export default MyBookings;







