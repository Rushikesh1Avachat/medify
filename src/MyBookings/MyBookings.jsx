import { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);
  }, []);

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h1" component="h1" gutterBottom>My Bookings</Typography>

      {bookings.length === 0 ? (
        <Typography>No appointments booked yet.</Typography>
      ) : (
        bookings.map((b, i) => (
          <Card key={i} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h3">{b.hospitalName}</Typography>
              <Typography>Date: {b.date}</Typography>
              <Typography>Time: {b.time}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default MyBookings;

