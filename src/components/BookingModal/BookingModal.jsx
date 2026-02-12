import { useState } from "react";

function BookingModal({ hospital, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    const booking = {
      hospital: hospital["Hospital Name"],
      city: hospital.City,
      state: hospital.State,
      date,
      time,
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    alert("Booking Confirmed");
    onClose();
  };

  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      <h3>Book Appointment</h3>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select Time</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="2:00 PM">2:00 PM</option>
      </select>

      <button onClick={handleBooking}>
        Confirm Booking
      </button>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default BookingModal;









