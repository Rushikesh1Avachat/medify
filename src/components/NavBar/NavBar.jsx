import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

 function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <Button onClick={() => navigate("/")}>Medify</Button>
        <Button>Find Doctors</Button>
        <Button>Hospitals</Button>
        <Button>Medicines</Button>
        <Button>Surgeries</Button>
        <Button>Facilities</Button>
        <Button
          variant="contained"
          onClick={() => navigate("/my-bookings")}
        >
          My Bookings
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar