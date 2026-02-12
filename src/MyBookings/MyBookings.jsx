import React, { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 && <p>No bookings yet.</p>}
      {bookings.map((b, idx) => (
        <div key={idx}>
          <h3>{b.hospital?.["Hospital Name"] || "Unknown Hospital"}</h3>
          <p>{b.slot || "No slot selected"}</p>
          <p>{b.date || "No date selected"}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;









