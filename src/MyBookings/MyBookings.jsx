import { useEffect, useState } from "react";
import { Typography, Box, Divider } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
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
    <Box sx={{ maxWidth: 800, mx: "auto", px: 2, py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        My Bookings
      </Typography>

      {bookings.map((booking, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 3,
            mb: 3,
            bgcolor: "white",
            boxShadow: 1,
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {booking.hospitalName}
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            {booking.city}, {booking.state}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body1">
              <strong>Date:</strong> {booking.date}
            </Typography>
            <Typography variant="body1">
              <strong>Time:</strong> {booking.time}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default MyBookings;






