import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Bookings</h2>

      {bookings.length === 0 && <p>No bookings found.</p>}

      {bookings.map((booking, index) => (
        <div key={index} style={{ marginBottom: 16 }}>
          <h3>{booking.hospital}</h3>
          <p>{booking.city}, {booking.state}</p>
          <p>{booking.date} at {booking.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;







