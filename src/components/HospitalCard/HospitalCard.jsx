// src/components/HospitalCard.jsx
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

export default function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h3" component="h3" color="primary" gutterBottom>
            {hospital["Hospital Name"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hospital.Address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hospital.City}, {hospital.State} {hospital["ZIP Code"]}
          </Typography>
          {hospital["Overall Rating"] && (
            <Typography mt={1}>Rating: {hospital["Overall Rating"]} ★</Typography>
          )}
        </CardContent>
        <Box sx={{ p: 3, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{ bgcolor: '#2AA7FF', textTransform: 'none', py: 1.5 }}
          >
            Book FREE Center Visit
          </Button>
        </Box>
      </Card>

      <BookingModal open={open} onClose={() => setOpen(false)} hospital={hospital} />
    </>
  );
}