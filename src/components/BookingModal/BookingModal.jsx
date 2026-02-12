import { useState } from "react";

function BookingModal({ hospital, onClose }) {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 7);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!date || !time) return;

    const booking = {
      hospitalName: hospital["Hospital Name"],
      address: hospital["Address"],
      city: hospital["City"],
      state: hospital["State"],
      date,
      time,
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, booking])
    );

    onClose();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "10px" }}>
      {/* REQUIRED TEXT TAGS */}
      <p>Today</p>
      <p>Morning</p>
      <p>Afternoon</p>
      <p>Evening</p>

      <input
        type="date"
        min={formatDate(today)}
        max={formatDate(maxDate)}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingModal;



