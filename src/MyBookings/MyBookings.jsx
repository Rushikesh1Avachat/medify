import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return <p>No Bookings Found</p>;
  }

  return (
    <div>
      {bookings.map((booking, index) => (
        <div key={index}>
          <h3>{booking.hospitalName}</h3>
          <p>
            {booking.city}, {booking.state}
          </p>
          <p>{booking.date}</p>
          <p>{booking.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;





