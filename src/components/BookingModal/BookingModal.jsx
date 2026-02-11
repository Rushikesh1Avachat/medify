import { useState, useEffect } from "react";

function BookingModal({ hospital }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookings, setBookings] = useState([]);

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  /* ✅ Load bookings from localStorage */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);
  }, []);

  /* ✅ Slot disable logic */
  const isSlotBooked = (slot) =>
    bookings.some(
      (b) =>
        b.hospitalName === hospital["Hospital Name"] &&
        b.date === selectedDate &&
        b.time === slot
    );

  /* ✅ Book appointment */
  const handleBook = () => {
    if (!selectedDate || !selectedSlot) return;

    const newBooking = {
      hospitalName: hospital["Hospital Name"],
      date: selectedDate,
      time: selectedSlot,
      city: hospital.City,
      state: hospital.State,
    };

    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));

    alert("Appointment booked!");
  };

  /* ✅ Next 7 days only */
  const upcomingDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  return (
    <div
      id="booking-section"
      style={{
        border: "1px solid #ccc",
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
      }}
    >
      <h4>Book Appointment</h4>

      {/* ✅ Cypress EXPECTS input#date */}
      <input
        id="date"
        type="date"
        value={selectedDate}
        min={upcomingDates[0]}
        max={upcomingDates[6]}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          setSelectedSlot("");
        }}
      />

      {/* ✅ Time Slots */}
      {selectedDate && (
        <div
          id="time-slots"
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}
        >
          {slots.map((slot) => {
            const disabled = isSlotBooked(slot);

            return (
              <button
                key={slot}
                disabled={disabled}
                onClick={() => setSelectedSlot(slot)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #2AA7FF",
                  background: disabled
                    ? "#ccc"
                    : selectedSlot === slot
                    ? "#2AA7FF"
                    : "#fff",
                  color: disabled
                    ? "#666"
                    : selectedSlot === slot
                    ? "#fff"
                    : "#000",
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
              >
                {slot}
              </button>
            );
          })}
        </div>
      )}

      {/* ✅ Cypress EXPECTS button#bookBtn */}
      <button
        id="bookBtn"
        disabled={!selectedSlot}
        onClick={handleBook}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "#2AA7FF",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: "1rem",
          opacity: selectedSlot ? 1 : 0.6,
        }}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default BookingModal;


