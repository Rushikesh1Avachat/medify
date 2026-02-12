import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

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
        <div key={index}>
          <Typography variant="h3">
            {booking.hospitalName}
          </Typography>

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






