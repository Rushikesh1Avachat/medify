// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Medify</Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/my-bookings">My Bookings</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
