// src/components/SearchBar/SearchBar.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

 function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const navigate = useNavigate();

  // Fetch all states on mount
  useEffect(() => {
    axios.get('https://meddata-backend.onrender.com/states')
      .then(res => setStates(res.data || []))
      .catch(err => console.error("States fetch error:", err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      setSelectedCity('');
      return;
    }

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
        alignItems: 'center',
        gap: 2,
        background: 'white',
        p: 2,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: 850,
        mx: 'auto',
        border: '1px solid #e0e0e0',
      }}
    >
      {/* State field – matches Figma (search icon + blue focus border) */}
      <FormControl sx={{ flex: 1, minWidth: 220 }}>
        <InputLabel htmlFor="state-input">State</InputLabel>
        <Select
          id="state"
          value={selectedState}
          label="State"
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity(''); // reset city when state changes
          }}
          input={
            <OutlinedInput
              id="state-input"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              }
              sx={{
                borderRadius: 2,
                '& fieldset': { borderColor: '#2AA7FF' },
                '&:hover fieldset': { borderColor: '#1e90e6' },
                '&.Mui-focused fieldset': { borderColor: '#2AA7FF', borderWidth: 2 },
              }}
            />
          }
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* City field – matches Figma (search icon + blue focus border) */}
      <FormControl sx={{ flex: 1, minWidth: 220 }}>
        <InputLabel htmlFor="city-input">City</InputLabel>
        <Select
          id="city"
          value={selectedCity}
          label="City"
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
          input={
            <OutlinedInput
              id="city-input"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              }
              sx={{
                borderRadius: 2,
                '& fieldset': { borderColor: '#2AA7FF' },
                '&:hover fieldset': { borderColor: '#1e90e6' },
                '&.Mui-focused fieldset': { borderColor: '#2AA7FF', borderWidth: 2 },
              }}
            />
          }
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Search button – exact Figma blue button */}
      <Button
        type="submit"
        variant="contained"
        id="searchBtn"
        disabled={!selectedCity}
        sx={{
          px: 5,
          py: 1.8,
          fontSize: '1.1rem',
          bgcolor: '#2AA7FF',
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 140,
          boxShadow: '0 4px 12px rgba(42,167,255,0.3)',
          '&:hover': {
            bgcolor: '#1e90e6',
            boxShadow: '0 6px 20px rgba(42,167,255,0.4)',
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
}
export default SearchBar