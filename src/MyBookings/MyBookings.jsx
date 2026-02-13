// src/pages/MyBookings/MyBookings.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        My Bookings
      </Typography>

      {bookings.length === 0 ? (
        <Typography align="center" color="text.secondary" mt={6}>
          No bookings yet.
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {bookings.map((b, i) => (
            <Card key={i} variant="outlined">
              <CardContent>
                <Typography variant="h6">{b.hospitalName}</Typography>
                <Typography color="text.secondary">{b.address || ''}</Typography>
                <Box mt={2}>
                  <Typography><strong>Date:</strong> {b.date}</Typography>
                  <Typography component="p">
                    <strong>Time:</strong> {b.timeOfDay} – {b.time}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}