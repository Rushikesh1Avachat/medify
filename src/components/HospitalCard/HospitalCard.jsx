import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, marginBottom: 20 }}>
      <h3>{hospital["Hospital Name"]}</h3>
      <p>
        {hospital.City}, {hospital.State}
      </p>

      <button onClick={() => setShowBooking(!showBooking)}>
        Book FREE Center Visit
      </button>

      {showBooking && (
        <BookingModal hospital={hospital} />
      )}
    </div>
  );
}

export default HospitalCard;



