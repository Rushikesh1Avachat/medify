import { useState } from "react";
import { Box, Typography } from "@mui/material";

// Choose **ONE** correct import path — delete the other
// Option A: if BookingModal is in the same folder
import BookingModal from "../BookingModal/BookingModal";

// Option B: if BookingModal is in ../BookingModal folder (uncomment if needed)
// import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: "100%", p: 2, border: "1px solid #e0e0e0", borderRadius: 2 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: 600,
          cursor: "pointer",
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

      {open && (
        <BookingModal 
          hospital={hospital} 
          onClose={() => setOpen(false)} 
        />
      )}
    </Box>
  );
}

export default HospitalCard;

