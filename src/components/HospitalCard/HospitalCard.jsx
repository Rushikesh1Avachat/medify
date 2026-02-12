// HospitalCard.jsx

import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: 8 }}>
      <h3
        style={{ cursor: "pointer", margin: 0, color: showBooking ? "#1976d2" : "inherit" }}
        onClick={() => setShowBooking(!showBooking)}
      >
        {hospital["Hospital Name"]}
      </h3>

      <p style={{ margin: "8px 0 16px 0", color: "#666" }}>
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


