import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <h3
        onClick={() => setShowBooking(!showBooking)}
        style={{ cursor: "pointer", margin: 0 }}
      >
        {hospital["Hospital Name"]}
      </h3>

      <p style={{ margin: "8px 0", color: "#555" }}>
        {hospital.City}, {hospital.State}
      </p>

      {showBooking && (
        <BookingModal 
          hospital={hospital} 
          onClose={() => setShowBooking(false)} 
        />
      )}
    </div>
  );
}

export default HospitalCard;



