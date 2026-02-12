import React from "react";

function BookingModal({ hospital, onClose }) {
  const handleBook = (slot) => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({ hospital, slot, date: new Date().toLocaleDateString() });
    localStorage.setItem("bookings", JSON.stringify(bookings));
    onClose();
  };

  return (
    <div className="modal">
      <h3>{hospital["Hospital Name"]}</h3>
      <p>Today</p>
      <p onClick={() => handleBook("Morning")}>Morning</p>
      <p onClick={() => handleBook("Afternoon")}>Afternoon</p>
      <p onClick={() => handleBook("Evening")}>Evening</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default BookingModal;











