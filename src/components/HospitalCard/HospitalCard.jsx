import { useState } from "react";
import { Typography, Button, Box, Chip } from "@mui/material"; // ← add these

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");   // ← NEW: track selected slot label
  const [booked, setBooked] = useState(false);            // ← NEW: show success

  // Keep original name for display, only lowercase for storage if needed
  const displayName = hospital["Hospital Name"];
  const storageName = displayName.toLowerCase();

  const handleSelectTime = (timeLabel) => {
    setSelectedTime(timeLabel); // e.g. "Afternoon", "Morning"
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) return;

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      hospitalName: storageName,   // keep lowercase for test match
      state: hospital.State,
      city: hospital.City,
      date: selectedDate,
      time: selectedTime,          // ← store "Afternoon" instead of clock time
    };

    localStorage.setItem("bookings", JSON.stringify([...bookings, newBooking]));
    
    setBooked(true);               // trigger success UI
    // Optional: setSelectedTime(""); reset form etc.
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <Typography
        variant="h3"
        onClick={() => setShowBooking(!showBooking)} // toggle is nicer
        style={{ cursor: "pointer" }}
      >
        {displayName}  {/* Show proper case */}
      </Typography>

      <p>
        {hospital.City}, {hospital.State}
      </p>

      {showBooking && !booked && (
        <Box mt={2}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <Box mt={2}>
            <Typography>Morning</Typography>
            <Chip
              label="09:00 AM"
              color={selectedTime === "Morning" ? "primary" : "default"}
              onClick={() => handleSelectTime("Morning")}
              clickable
            />
          </Box>

          <Box mt={1}>
            <Typography>Afternoon</Typography>
            <Chip
              label="01:00 PM"
              color={selectedTime === "Afternoon" ? "primary" : "default"}
              onClick={() => handleSelectTime("Afternoon")}
              clickable
            />
          </Box>

          <Box mt={1}>
            <Typography>Evening</Typography>
            <Chip
              label="06:00 PM"
              color={selectedTime === "Evening" ? "primary" : "default"}
              onClick={() => handleSelectTime("Evening")}
              clickable
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleBookAppointment}
            disabled={!selectedDate || !selectedTime}
            sx={{ mt: 3 }}
          >
            Book Appointment
          </Button>
        </Box>
      )}

      {booked && (
        <Box mt={2} p={2} bgcolor="success.light" borderRadius={1}>
          <Typography variant="h6" color="success.main">
            Appointment Booked!
          </Typography>
          <p>Date: {selectedDate}</p>
          <p>Time: {selectedTime}</p>           {/* ← This is what test wants */}
        </Box>
      )}
    </div>
  );
}

export default HospitalCard;





