import { Card, CardContent, Typography, Button } from "@mui/material";
import BookingSection from "../BookingSection/BookingSection";

function HospitalCard({ hospital, onBook, booking }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h3" component="h3">
          {hospital["Hospital Name"]}
        </Typography>

        <Typography color="text.secondary">
          {hospital.City}, {hospital.State}
        </Typography>

        {!booking && (
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={onBook}
          >
            Book FREE Center Visit
          </Button>
        )}

        {booking && <BookingSection hospital={hospital} />}
      </CardContent>
    </Card>
  );
}

export default HospitalCard;
