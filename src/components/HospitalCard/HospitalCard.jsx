import { useState } from "react";

function HospitalCard({ hospital }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = (time) => {
    if (!selectedDate) return;

    const old =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      hospitalName: hospital["Hospital Name"],
      state: hospital.State,
      city: hospital.City,
      date: selectedDate,
      time: time,
    };

    const updated = [...old, newBooking];

    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "20px", padding: "15px" }}>

      {/* Hospital Name */}
      <h3>{hospital["Hospital Name"]}</h3>

      <p>{hospital.City}, {hospital.State}</p>

      {/* Date Picker */}
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {/* TIME SLOTS — MUST ALWAYS BE VISIBLE */}
      <div>

        <p>Morning</p>
        <button onClick={() => handleBooking("09:00 AM")}>09:00 AM</button>

        <p>Afternoon</p>
        <button onClick={() => handleBooking("01:00 PM")}>01:00 PM</button>

        <p>Evening</p>
        <button onClick={() => handleBooking("06:00 PM")}>06:00 PM</button>

      </div>

    </div>
  );
}

export default HospitalCard;

