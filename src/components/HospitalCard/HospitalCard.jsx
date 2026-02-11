import { Card, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ hospital }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h3">{hospital["Hospital Name"]}</Typography>
        <Typography>{hospital.Address}</Typography>
        <Typography>{hospital.City}, {hospital.State} - {hospital["ZIP Code"]}</Typography>
        <Typography>Rating: {hospital["Overall Rating"]}</Typography>

        <Button
          onClick={() => setShowBooking(!showBooking)}
          sx={{ mt: 2 }}
          variant="contained"
        >
          Book FREE Center Visit
        </Button>

        {showBooking && <BookingModal hospital={hospital} />}
      </CardContent>
    </Card>
  );
}

export default HospitalCard;
