// src/components/SearchBar/SearchBar.jsx
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import IconCard from "../IconCard/IconCard"; // adjust path if needed
import styles from "./SearchBar.module.css";

import doctorIcon from "../../assets/Doctor.jpg";
import labIcon from "../../assets/blood-test.jpg";
import hospitalIcon from "../../assets/cardiology.jpg";
import pharmacyIcon from "../../assets/Capsule.jpg";
import ambulanceIcon from "../../assets/Ambulance.jpg";

export default function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const services = [
    { title: "Doctors", icon: doctorIcon },
    { title: "Labs", icon: labIcon },
    { title: "Hospitals", icon: hospitalIcon, active: true },
    { title: "Medical Store", icon: pharmacyIcon },
    { title: "Ambulance", icon: ambulanceIcon },
  ];

  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoadingStates(true);
        const res = await axios.get("https://meddata-backend.onrender.com/states");
        setStates((res.data || []).sort());
      } catch (err) {
        setError("Failed to load states.");
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      setSelectedCity("");
      return;
    }

    const fetchCities = async () => {
      try {
        setLoadingCities(true);
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`
        );
        setCities((res.data || []).sort());
      } catch (err) {
        setError("Failed to load cities.");
      } finally {
        setLoadingCities(false);
      }
    };
    fetchCities();
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate({
        pathname: "/search",
        search: createSearchParams({ state: selectedState, city: selectedCity }).toString(),
      });
    }
  };

  return (
    <Box className={styles.searchCardWrapper}>
      <Box className={styles.searchCard}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <Box className={styles.selectWrapper} id="state">
            <SearchIcon className={styles.icon} />
            {loadingStates ? (
              <CircularProgress size={24} />
            ) : (
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("");
                }}
                required
                disabled={loadingStates || !!error}
              >
                <option value="" disabled>Select State</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            )}
          </Box>

          <Box className={styles.selectWrapper} id="city">
            <SearchIcon className={styles.icon} />
            {loadingCities ? (
              <CircularProgress size={24} />
            ) : (
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState || loadingCities || cities.length === 0 || !!error}
                required
              >
                <option value="" disabled>Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            )}
          </Box>

          <Button
            type="submit"
            id="searchBtn"
            variant="contained"
            startIcon={<SearchIcon />}
            disableElevation
            disabled={!selectedState || !selectedCity || loadingStates || loadingCities}
          >
            Search
          </Button>
        </form>

        {error && (
          <FormHelperText error sx={{ textAlign: "center", mt: 1 }}>
            {error}
          </FormHelperText>
        )}

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500, color: "#102851" }}>
            You may be looking for
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {services.map((s) => (
              <Grid item key={s.title} xs={6} sm={4} md={2.2}>
                <IconCard img={s.icon} title={s.title} active={s.active} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}