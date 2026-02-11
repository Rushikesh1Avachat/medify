// src/components/HospitalCard/HospitalCard.jsx
import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal"
function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setOpen(true)}>
        {hospital["Hospital Name"].toLowerCase()}
      </h3>

      {open && <BookingModal hospital={hospital} />}
    </div>
  );
}
export default HospitalCard