import { useState } from "react";
import { Typography } from "@mui/material";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = (time) => {
    if (!selectedDate) return;

    const old =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      hospitalName: hospital["Hospital Name"].toLowerCase(),
      state: hospital.State,
      city: hospital.City,
      date: selectedDate,
      time: time,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...old, newBooking])
    );
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: 20, margin: 20 }}
      onClick={() => setShowBooking(true)}
    >
      <Typography variant="h3">
        {hospital["Hospital Name"].toLowerCase()}
      </Typography>

      <p>
        {hospital.City}, {hospital.State}
      </p>

      {showBooking && (
        <div onClick={(e) => e.stopPropagation()}>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          {/* REQUIRED TEXT */}
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





