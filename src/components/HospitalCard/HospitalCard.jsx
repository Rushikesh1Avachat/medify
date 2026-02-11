// src/components/HospitalCard/HospitalCard.jsx
import { useState } from 'react';
import { Card, CardContent, Typography, Button, Rating } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

 function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  const name = hospital["Hospital Name"] || "Medical Center";

  return (
    <>
      <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Test 6 REQUIRES real <h3> tag with hospital name */}
          <Typography variant="h3" component="h3" gutterBottom sx={{ fontSize: '1.6rem', fontWeight: 600 }}>
            {name}
          </Typography>

          <Rating value={Number(hospital["Hospital overall rating"] || 0)} readOnly precision={0.5} />

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {hospital["Address"] || "No address"}
          </Typography>

          <Button variant="contained" fullWidth sx={{ mt: 3, py: 1.5 }} onClick={() => setOpen(true)}>
            Book FREE Center Visit
          </Button>
        </CardContent>
      </Card>

      <BookingModal open={open} onClose={() => setOpen(false)} hospital={hospital} />
    </>
  );
}
export default HospitalCard