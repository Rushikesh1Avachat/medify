import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>My Bookings</h1>

      {bookings.map((booking, index) => (
        <div key={index}>
          <h3>{booking["Hospital Name"]}</h3>
          <p>{booking.City}, {booking.State}</p>
          <p>{booking.bookingDate}</p>
          <p>{booking.bookingTime}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;







