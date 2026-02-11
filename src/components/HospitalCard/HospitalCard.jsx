import { Button } from "@mui/material";
import { useState } from "react";

 function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  const book = () => {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push({
      name: hospital["Hospital Name"],
      city: hospital.City,
    });
    localStorage.setItem("bookings", JSON.stringify(existing));
  };

  return (
    <div>
      {/* ✅ REQUIRED */}
      <h3>{hospital["Hospital Name"].toLowerCase()}</h3>

      <Button onClick={() => setShowBooking(true)}>
        Book FREE Center Visit
      </Button>

      {showBooking && (
        <Button onClick={book}>Confirm Booking</Button>
      )}
    </div>
  );
}
export default HospitalCard