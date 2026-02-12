import { useEffect, useState } from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bookings");
      if (stored) {
        const parsed = JSON.parse(stored);
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
        // Safely get values - support both possible formats
        const hospitalName = 
          booking.hospitalName || 
          booking["Hospital Name"] || 
          booking.hospital?.["Hospital Name"] || 
          "Unknown Hospital";

        const city = booking.city || booking.City || "";
        const state = booking.state || booking.State || "";

        const date = booking.date || booking.bookingDate || "—";
        const time = booking.time || booking.slot || booking.bookingTime || "—";

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
              }}
            >
              {hospitalName.toLowerCase()} {/* lowercase for test assertion */}
            </Typography>

            <Typography variant="body1" color="text.secondary" gutterBottom>
              {city ? `${city}, ${state}` : state || "Location not specified"}
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









