// src/components/HospitalCard/HospitalCard.jsx
import { useState } from 'react';
import { Card, CardContent, Typography, Button, Rating } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

 function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  // Safety guard: if hospital is invalid/undefined → show fallback
  if (!hospital || typeof hospital !== 'object') {
    return (
      <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" color="error">
            Invalid hospital data
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const name = hospital["Hospital Name"] || "Medical Center";
  const rating = Number(hospital["Hospital overall rating"] || 0);
  const address = hospital["Address"] || "No address available";

  return (
    <>
      <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Required by test 6: real <h3> */}
          <Typography variant="h3" component="h3" gutterBottom sx={{ fontSize: '1.6rem', fontWeight: 600 }}>
            {name}
          </Typography>

          <Rating value={rating} readOnly precision={0.5} />

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {address}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            onClick={() => setOpen(true)}
          >
            Book FREE Center Visit
          </Button>
        </CardContent>
      </Card>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        hospital={hospital}
      />
    </>
  );
}
export default HospitalCard