import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://meddata-backend.onrender.com/states")
      .then(res => setStates(res.data || []))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedState) return;
    axios.get(`https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`)
      .then(res => setCities(res.data || []))
      .catch(err => console.error(err));
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/search?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <div id="state">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            label="State"
            onChange={e => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            {states.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
      </div>

      <div id="city">
        <FormControl sx={{ minWidth: 200 }} disabled={!selectedState}>
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            label="City"
            onChange={e => setSelectedCity(e.target.value)}
          >
            {cities.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
          </Select>
        </FormControl>
      </div>

      <Button type="submit" id="searchBtn" variant="contained" disabled={!selectedCity}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;

