// src/components/BookingModal/BookingModal.jsx
import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

function BookingModal({ hospital, onClose }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const handleBook = () => {
    if (!date || !slot) return;

    const booking = {
      "Hospital Name": hospital["Hospital Name"].toLowerCase(),
      City: hospital.City,
      State: hospital.State,
      bookingDate: date,
      bookingTime: slot
    };

    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    onClose();
  };

  return (
    <Box sx={{ mt: 3, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h6">Book Appointment</Typography>
      <Typography>Today</Typography>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ margin: "16px 0", display: "block" }} />

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        {["Morning", "Afternoon", "Evening"].map(s => (
          <Button
            key={s}
            variant={slot === s ? "contained" : "outlined"}
            onClick={() => setSlot(s)}
          >
            {s}
          </Button>
        ))}
      </Box>

      <Button variant="contained" disabled={!date || !slot} onClick={handleBook}>
        Confirm Booking
      </Button>

      <Button sx={{ mt: 1 }} onClick={onClose}>Close</Button>
    </Box>
  );
}

export default BookingModal;








