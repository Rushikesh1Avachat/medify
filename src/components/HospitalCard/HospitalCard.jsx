import { Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

 function HospitalCard({ hospital }) {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <h3>{hospital["Hospital Name"]}</h3>
        <p>{hospital.Address}</p>

        <Button
          variant="outlined"
          onClick={() => setOpen(!open)}
        >
          Book FREE Center Visit
        </Button>

        {open && <BookingModal hospital={hospital} />}
      </CardContent>
    </Card>
  );
}
export default HospitalCard