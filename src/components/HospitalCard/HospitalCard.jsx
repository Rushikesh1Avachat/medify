// src/components/HospitalCard/HospitalCard.jsx
import { useState } from "react";
import { Card, CardContent, Typography, Button, Rating } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  // Cypress expects lowercase hospital name inside <h3>
  const name =
    (hospital["Hospital Name"] || "Medical Center").toLowerCase();

  return (
    <>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          {/* ✅ REQUIRED: real h3 with lowercase text */}
          <Typography
            component="h3"
            variant="h3"
            sx={{ fontSize: "1.6rem", fontWeight: 600 }}
            gutterBottom
          >
            {name}
          </Typography>

          <Rating
            value={Number(hospital["Hospital overall rating"] || 0)}
            readOnly
            precision={0.5}
          />

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {hospital["Address"] || "No address"}
          </Typography>

          {/* Cypress clicks this button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            onClick={() => setOpen(true)}
          >
            Book FREE Center Visit
          </Button>
        </CardContent>
      </Card>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        hospital={hospital}
      />
    </>
  );
}

export default HospitalCard;
