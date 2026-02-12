import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal"
import { Box, Typography } from "@mui/material";
function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        sx={{ cursor: "pointer", fontWeight: 600 }}
        onClick={() => setOpen(true)}
      >
        {hospital["Hospital Name"]}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {hospital.City}, {hospital.State}
      </Typography>

      {open && <BookingModal hospital={hospital} onClose={() => setOpen(false)} />}
    </Box>
  );
}

export default HospitalCard;



