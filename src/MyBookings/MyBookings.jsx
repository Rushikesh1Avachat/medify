import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  if (bookings.length === 0) {
    return <p>No Bookings Found</p>;
  }

  return (
    <div>
      {bookings.map((booking, index) => (
        <div key={index} className="booking-card">
          <h3>{booking.hospitalName}</h3>
          <p>{booking.city}, {booking.state}</p>
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;



