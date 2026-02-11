// src/components/BookingModal/BookingModal.jsx
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { format, addDays, isToday } from 'date-fns';

const timeSlots = {
  Morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
  Afternoon: ['12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'],
  Evening: ['04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
};

export default function BookingModal({ open, onClose, hospital }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [period, setPeriod] = useState('Morning');

  const minDate = new Date();
  const maxDate = addDays(new Date(), 7);

  const handleBook = () => {
    if (!time) return alert('Please select a time slot');

    const booking = {
      hospital: hospital["Hospital Name"],
      date: format(date, 'yyyy-MM-dd'),
      time,
      period,
      bookedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    localStorage.setItem('bookings', JSON.stringify([...existing, booking]));

    alert('Booking confirmed!');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book Appointment at {hospital["Hospital Name"]}</DialogTitle>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />
        </LocalizationProvider>

        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Available Slots</Typography>

          {/* Test requires real <p> tag */}
          <p style={{ fontWeight: 600, margin: '12px 0 8px' }}>
            {isToday(date) ? 'Today' : format(date, 'EEEE, MMM d')}
          </p>

          <ToggleButtonGroup value={period} exclusive onChange={(_, v) => v && setPeriod(v)} fullWidth sx={{ mb: 2 }}>
            {Object.keys(timeSlots).map(p => <ToggleButton key={p} value={p}>{p}</ToggleButton>)}
          </ToggleButtonGroup>

          {/* Test requires real <p> tag */}
          <p style={{ fontWeight: 600, margin: '16px 0 8px' }}>{period}</p>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {timeSlots[period].map(slot => (
              <Button key={slot} variant={time === slot ? 'contained' : 'outlined'} onClick={() => setTime(slot)}>
                {slot}
              </Button>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleBook} disabled={!time}>
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
}