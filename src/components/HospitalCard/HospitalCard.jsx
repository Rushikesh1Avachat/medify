import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3>{hospital["Hospital Name"]}</h3>

      <p>{hospital["Address"]}</p>
      <p>{hospital["City"]}</p>
      <p>{hospital["State"]}</p>
      <p>Rating: {hospital["Hospital overall rating"]}</p>

      <button onClick={() => setOpen(true)}>
        Book FREE Center Visit
      </button>

      {open && (
        <BookingModal
          hospital={hospital}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default HospitalCard;

