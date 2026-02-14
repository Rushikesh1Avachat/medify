import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid } from "@mui/material";
import { format, addDays } from "date-fns";

export default function BookingModal({ open, onClose, hospital }) {
  const [dateIndex, setDateIndex] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const timePeriods = [
    { name: "Morning", times: ["09:00 AM", "10:00 AM", "11:00 AM"] },
    { name: "Afternoon", times: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"] },
    { name: "Evening", times: ["04:00 PM", "05:00 PM", "06:00 PM"] },
  ];

  const handleBook = () => {
    if (dateIndex === null || selectedSlot === null) return;

    const booking = {
      hospitalName: hospital["Hospital Name"],
      city: hospital.City,
      state: hospital.State,
      date: format(dates[dateIndex], "dd MMM yyyy"),
      time: selectedSlot.time,
    };

    const prev = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...prev, booking]));

    setDateIndex(null);
    setSelectedSlot(null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book Appointment at {hospital["Hospital Name"]}</DialogTitle>
      <DialogContent dividers>
        <Typography component="p" fontWeight="medium" gutterBottom>Select Date</Typography>
        <Grid container spacing={1}>
          {dates.map((d, i) => (
            <Grid item key={i}>
              <Button
                variant={dateIndex === i ? "contained" : "outlined"}
                size="small"
                onClick={() => setDateIndex(i)}
              >
                {i === 0 ? "Today" : format(d, "dd MMM")}
              </Button>
            </Grid>
          ))}
        </Grid>

        {dateIndex !== null && (
          <Box mt={4}>
            {timePeriods.map((p) => (
              <Box key={p.name} mb={3}>
                <Typography component="p" fontWeight="medium" gutterBottom>{p.name}</Typography>
                <Grid container spacing={1}>
                  {p.times.map((t) => (
                    <Grid item key={t}>
                      <Button
                        variant={selectedSlot?.time === t ? "contained" : "outlined"}
                        size="small"
                        onClick={() => setSelectedSlot({ period: p.name, time: t })}
                      >
                        {t}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" disabled={dateIndex === null || selectedSlot === null} onClick={handleBook}>
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
}









