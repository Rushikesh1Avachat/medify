import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2AA7FF" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/")}
        >
          Medify
        </Typography>

        <Box>
          <Button color="inherit">Find Doctors</Button>
          <Button color="inherit">Hospitals</Button>
          <Button color="inherit">Medicines</Button>
          <Button
            color="inherit"
            onClick={() => navigate("/my-bookings")}
          >
            My Bookings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

