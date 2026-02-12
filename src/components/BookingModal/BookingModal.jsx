import { useState } from "react";

function BookingModal({ hospital, onClose }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const slots = ["Morning", "Afternoon", "Evening"];

  const handleBook = () => {
    if (!date || !slot || !hospital) return;

    const booking = {
      "Hospital Name": hospital["Hospital Name"]?.toLowerCase(),
      "City": hospital.City,
      "State": hospital.State,
      bookingDate: date,
      bookingTime: slot,
    };

    const current =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...current, booking])
    );

    // ✅ SAFE CLOSE (NO CRASH EVER)
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <p>Today</p>
      <p>Morning</p>
      <p>Afternoon</p>
      <p>Evening</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {slots.map((s) => (
        <button key={s} onClick={() => setSlot(s)}>
          {s}
        </button>
      ))}

      <button onClick={handleBook}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingModal;







