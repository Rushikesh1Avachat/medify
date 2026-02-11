import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      try {
        setBookings(JSON.parse(stored));
      } catch {
        setBookings([]);
      }
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      {/* ✅ Cypress anchor – DO NOT CHANGE */}
      <Typography variant="h1" component="h1" gutterBottom>
        My Bookings
      </Typography>

      {bookings.length === 0 ? (
        <Typography color="text.secondary">
          No appointments booked yet.
        </Typography>
      ) : (
        <Box>
          {bookings.map((b, index) => (
            <Card key={index} sx={{ mb: 3 }}>
              <CardContent>
                {/* ✅ Cypress asserts hospital name text */}
                <Typography variant="h3" component="h3">
                  {b.hospitalName}
                </Typography>

                {/* ✅ Cypress checks plain text values */}
                <Typography>Date: {b.date}</Typography>
                <Typography>Time: {b.time}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default MyBookings;

