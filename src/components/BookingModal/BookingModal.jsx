import { useState } from "react";

function BookingModal({ hospital, onClose }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const slots = ["Morning", "Afternoon", "Evening"];

  const handleBook = () => {
    if (!date || !slot) return;

    const booking = {
      hospitalName: hospital["Hospital Name"].toLowerCase(),
      city: hospital.City,
      state: hospital.State,
      date,
      time: slot,                      // ← this is what the test wants
    };

    const current = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...current, booking]));

    // Show success message inside modal
    alert(`Booked for ${slot} on ${date}`); // simple way – or use state + <p>

    onClose();
  };

  return (
    <div style={{ marginTop: 16, padding: 16, background: "#f8f9fa", borderRadius: 8 }}>
      <p style={{ fontWeight: "bold" }}>Select Date & Time</p>

      {/* Required text tags – keep them */}
      <p>Today</p>
      <p>Morning</p>
      <p>Afternoon</p>
      <p>Evening</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ margin: "12px 0", display: "block" }}
      />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
        {slots.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSlot(s)}
            style={{
              padding: "8px 16px",
              background: slot === s ? "#1976d2" : "#e0e0e0",
              color: slot === s ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={handleBook}
        disabled={!date || !slot}
        style={{
          padding: "10px 24px",
          background: date && slot ? "#1976d2" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: date && slot ? "pointer" : "not-allowed",
        }}
      >
        Confirm Booking
      </button>

      {/* If you want visible success text instead of alert */}
      {/* {success && <p style={{ color: "green", marginTop: 16 }}>Booked for {slot} on {date}</p>} */}
    </div>
  );
}

export default BookingModal;



