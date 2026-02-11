// src/components/HospitalCard/HospitalCard.jsx
import { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import BookingModal from "../BookingSection/BookingSection";

function HospitalCard({ hospital }) {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <Card sx={{ minHeight: 250, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>
        {/* ✅ Cypress looks for h3 */}
        <Typography variant="h3" component="h3" gutterBottom>
          {hospital["Hospital Name"]}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {hospital.Address}, {hospital.City}, {hospital.State}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Contact: {hospital.Contact || "N/A"}
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        onClick={() => setOpenBooking((prev) => !prev)}
        sx={{ m: 2 }}
      >
        {openBooking ? "Close Booking" : "Book Appointment"}
      </Button>

      {openBooking && <BookingModal hospital={hospital} />}
    </Card>
  );
}

export default HospitalCard;
