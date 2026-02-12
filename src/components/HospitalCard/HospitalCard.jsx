// HospitalCard.jsx (simplified version)

import { useState } from "react";
import { Typography, Box } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        sx={{ cursor: "pointer", fontWeight: "medium" }}
        onClick={() => setOpenModal(true)}
      >
        {hospital["Hospital Name"]}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {hospital.City}, {hospital.State}
      </Typography>

      {openModal && (
        <BookingModal
          hospital={hospital} 
          onClose={() => setOpenModal(false)} 
        />
      )}
    </Box>
  );
}

export default HospitalCard;



