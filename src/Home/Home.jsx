import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data || []));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then(res => res.json())
        .then(data => setCities(data || []));
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate(`/search?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Find Hospitals
      </Typography>

      <Box sx={{ display: "flex", gap: 3, mb: 4, flexWrap: "wrap" }}>
        <div id="state">
          <select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
            style={{ padding: 10, minWidth: 220 }}
          >
            <option value="">Select State</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div id="city">
          <select
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            disabled={!selectedState}
            style={{ padding: 10, minWidth: 220 }}
          >
            <option value="">Select City</option>
            {cities.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <Button
          variant="contained"
          disabled={!selectedState || !selectedCity}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default Home;

