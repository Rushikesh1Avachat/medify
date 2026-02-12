// src/MyBookings/MyBookings.jsx
import React, { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(stored);
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.map((b, idx) => (
        <div key={idx}>
          <h3>{b["Hospital Name"]}</h3>
          <p>{b.City}, {b.State}</p>
          <p>{b.bookingDate} - {b.bookingTime}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;








