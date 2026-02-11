import { Box, Button, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then(res => setStates(res.data));
  }, []);

  useEffect(() => {
    if (!state) return;
    axios
      .get(`https://meddata-backend.onrender.com/cities/${state}`)
      .then(res => setCities(res.data));
  }, [state]);

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", bgcolor: "white", p: 3 }}>
      
      {/* ✅ REQUIRED BY CYPRESS */}
      <div id="state">
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">Select State</MenuItem>
          {states.map(s => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </div>

      {/* ✅ REQUIRED BY CYPRESS */}
      <div id="city">
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          displayEmpty
          disabled={!state}
        >
          <MenuItem value="">Select City</MenuItem>
          {cities.map(c => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </Select>
      </div>

      {/* ✅ REQUIRED */}
      <Button
        id="searchBtn"
        type="submit"
        variant="contained"
        onClick={() => navigate(`/search?state=${state}&city=${city}`)}
      >
        Search
      </Button>
    </Box>
  );
}
