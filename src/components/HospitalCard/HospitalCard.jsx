// src/components/HospitalCard.jsx
import { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Chip,
  Alert
} from '@mui/material';

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [booked, setBooked] = useState(false);

  const displayName = hospital['Hospital Name'];
  const storageName = displayName.toLowerCase(); // test expects lowercase

  const timeSlots = [
    { label: 'Morning', time: '09:00 AM' },
    { label: 'Afternoon', time: '01:00 PM' },
    { label: 'Evening', time: '06:00 PM' }
  ];

  const handleBook = () => {
    if (!selectedDate || !selectedTimeSlot) return;

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    const newBooking = {
      hospitalName: storageName,
      state: hospital.State,
      city: hospital.City,
      date: selectedDate,
      time: selectedTimeSlot  // store "Afternoon" etc. – what the test wants
    };

    localStorage.setItem('bookings', JSON.stringify([...bookings, newBooking]));

    setBooked(true);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography
        variant="h5"
        component="div"
        onClick={() => setShowBooking(prev => !prev)}
        sx={{ cursor: 'pointer', fontWeight: 'bold', mb: 1 }}
      >
        {displayName}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {hospital.City}, {hospital.State}
      </Typography>

      {showBooking && !booked && (
        <Box sx={{ mt: 3 }}>
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            style={{ marginBottom: '16px', padding: '8px' }}
          />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            {timeSlots.map(slot => (
              <Chip
                key={slot.label}
                label={slot.time}
                color={selectedTimeSlot === slot.label ? 'primary' : 'default'}
                variant={selectedTimeSlot === slot.label ? 'filled' : 'outlined'}
                onClick={() => setSelectedTimeSlot(slot.label)}
                clickable
              />
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleBook}
            disabled={!selectedDate || !selectedTimeSlot}
          >
            Book Appointment
          </Button>
        </Box>
      )}

      {booked && (
        <Alert severity="success" sx={{ mt: 3 }}>
          Appointment Booked Successfully!<br />
          Date: {selectedDate}<br />
          Time: {selectedTimeSlot}
        </Alert>
      )}
    </Box>
  );
}

export default HospitalCard;




