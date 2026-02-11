import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => setStates(res.data || []))
      .catch((err) => console.error(err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      setSelectedCity("");
      return;
    }

    axios
      .get(
        `https://meddata-backend.onrender.com/cities/${encodeURIComponent(
          selectedState
        )}`
      )
      .then((res) => setCities(res.data || []))
      .catch((err) => console.error(err));
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(
        `/search?state=${encodeURIComponent(
          selectedState
        )}&city=${encodeURIComponent(selectedCity)}`
      );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        background: "#fff",
        padding: 2,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {/* ✅ REQUIRED BY CYPRESS */}
      <div id="state" style={{ flex: 1 }}>
        <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            label="State"
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* ✅ REQUIRED BY CYPRESS */}
      <div id="city" style={{ flex: 1 }}>
        <FormControl fullWidth disabled={!selectedState}>
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            label="City"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Button
        id="searchBtn"
        type="submit"
        variant="contained"
        disabled={!selectedCity}
        sx={{ px: 4 }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
