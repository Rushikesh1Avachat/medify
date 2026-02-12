// src/components/MyBookings.jsx
import { useEffect, useState } from 'react';
import { Typography, Box, Divider } from '@mui/material';

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(stored);
  }, []);

  if (bookings.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" color="text.secondary">
          No Bookings Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Bookings
      </Typography>

      {bookings.map((booking, index) => (
        <Box
          key={index}
          sx={{
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            p: 3,
            mb: 3,
            bgcolor: 'white'
          }}
        >
          <Typography 
            variant="h3"           // ← matches the failing test selector
            component="h3"
            gutterBottom
          >
            {booking.hospitalName}   // lowercase – matches test expectation
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            {booking.city}, {booking.state}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography>
            <strong>Date:</strong> {booking.date}
          </Typography>
          <Typography>
            <strong>Time:</strong> {booking.time}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default MyBookings;






