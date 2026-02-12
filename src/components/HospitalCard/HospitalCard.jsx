import { useState } from "react";
import { Box, Typography } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal"; // adjust path if needed

function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        sx={{
          cursor: "pointer",
          fontWeight: 600,
          mb: 1,
          "&:hover": { color: "primary.main" },
        }}
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

