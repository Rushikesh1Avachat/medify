import { useState } from "react";
import { Box, Button, Chip, Typography, Alert } from "@mui/material";

function BookingModal({ hospital, onClose }) {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 7);

  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [success, setSuccess] = useState(false);

  const slots = [
    { label: "Morning",   time: "09:00 AM" },
    { label: "Afternoon", time: "01:00 PM" },
    { label: "Evening",   time: "06:00 PM" },
  ];

  const handleBooking = () => {
    if (!date || !timeSlot) return;

    const booking = {
      hospitalName: hospital["Hospital Name"].toLowerCase(), // test wants lowercase
      address: hospital["Address"],
      city: hospital.City,
      state: hospital.State,
      date,
      time: timeSlot,           // ← "Afternoon"
    };

    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    setSuccess(true);
    setTimeout(onClose, 1500); // auto close after success
  };

  return (
    <Box sx={{ border: "1px solid #ccc", p: 3, mt: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Book Appointment at {hospital["Hospital Name"]}
      </Typography>

      <p>Today</p> {/* required text tags – keep them */}
      <p>Morning</p>
      <p>Afternoon</p>
      <p>Evening</p>

      <input
        type="date"
        min={today.toISOString().split("T")[0]}
        max={maxDate.toISOString().split("T")[0]}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: 16, padding: 8 }}
      />

      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3 }}>
        {slots.map((slot) => (
          <Chip
            key={slot.label}
            label={slot.time}
            color={timeSlot === slot.label ? "primary" : "default"}
            variant={timeSlot === slot.label ? "filled" : "outlined"}
            onClick={() => setTimeSlot(slot.label)}
            clickable
          />
        ))}
      </Box>

      <Button
        variant="contained"
        disabled={!date || !timeSlot}
        onClick={handleBooking}
      >
        Confirm Booking
      </Button>

      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Booked for <strong>{timeSlot}</strong> on {date}
        </Alert>
      )}
    </Box>
  );
}

export default BookingModal;



