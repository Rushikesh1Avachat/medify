import { useState } from "react";
import { Typography } from "@mui/material";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const hospitalName =
    hospital["Hospital Name"].toLowerCase();

  const handleBooking = (time) => {
    if (!selectedDate) return;

    const old =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      hospitalName,
      state: hospital.State,
      city: hospital.City,
      date: selectedDate,
      time,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...old, newBooking])
    );
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
      }}
    >
      {/* MAKE ONLY TITLE CLICKABLE */}
      <Typography
        variant="h3"
        onClick={() => setShowBooking(true)}
        style={{ cursor: "pointer" }}
      >
        {hospitalName}
      </Typography>

      <p>
        {hospital.City}, {hospital.State}
      </p>

      {showBooking && (
        <div>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <p>Morning</p>
          <button onClick={() => handleBooking("09:00 AM")}>
            09:00 AM
          </button>

          <p>Afternoon</p>
          <button onClick={() => handleBooking("01:00 PM")}>
            01:00 PM
          </button>

          <p>Evening</p>
          <button onClick={() => handleBooking("06:00 PM")}>
            06:00 PM
          </button>
        </div>
      )}
    </div>
  );
}

export default HospitalCard;





