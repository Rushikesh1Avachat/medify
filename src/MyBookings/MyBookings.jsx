// src/MyBookings/MyBookings.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

 function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookings');
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h1" gutterBottom>
        My Bookings
      </Typography>

      {bookings.length === 0 ? (
        <Typography color="text.secondary">No appointments booked yet.</Typography>
      ) : (
        bookings.map((b, i) => (
          <Card key={i} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5">{b.hospital}</Typography>
              <Typography>Date: {b.date}</Typography>
              <Typography>Time: {b.time} ({b.period})</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}
export default MyBookings