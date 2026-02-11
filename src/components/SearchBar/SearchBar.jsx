// src/components/SearchBar/SearchBar.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://meddata-backend.onrender.com/states')
      .then(res => setStates(res.data || []))
      .catch(err => console.error("States fetch error:", err));
  }, []);

  useEffect(() => {
    if (!selectedState) return;
    axios.get(`https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`)
      .then(res => setCities(res.data || []))
      .catch(err => console.error("Cities fetch error:", err));
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/search?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 3,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-end',
        background: 'white',
        p: 4,
        borderRadius: 3,
        boxShadow: 6,
        maxWidth: 1000,
        mx: 'auto',
      }}
    >
      {/* Test requires exactly this: div#state */}
      <div id="state">
        <FormControl sx={{ minWidth: 260 }}>
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            label="State"
            onChange={e => {
              setSelectedState(e.target.value);
              setSelectedCity('');
            }}
          >
            {states.map(s => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Test requires exactly this: div#city */}
      <div id="city">
        <FormControl sx={{ minWidth: 260 }} disabled={!selectedState}>
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            label="City"
            onChange={e => setSelectedCity(e.target.value)}
          >
            {cities.map(c => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Test requires exactly this: button#searchBtn with type="submit" */}
      <Button
        type="submit"
        variant="contained"
        id="searchBtn"
        disabled={!selectedCity}
        sx={{
          px: 6,
          height: 56,
          bgcolor: '#2AA7FF',
          fontSize: '1.1rem',
        }}
      >
        Search
      </Button>
    </Box>
  );
}