import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Typography, Button } from "@mui/material";
import IconCard from "../IconCard/IconCard";
import styles from "./SearchBar.module.css";

// Assets
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
        const res = await axios.get("https://meddata-backend.onrender.com/states");
        setStates(res.data || []);
      } catch {
        setStates([]);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (!selectedState) return setCities([]);
    const fetchCities = async () => {
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${encodeURIComponent(selectedState)}`
        );
        setCities(res.data || []);
      } catch {
        setCities([]);
      }
    };
    fetchCities();
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) return;
    navigate({
      pathname: "/search",
      search: createSearchParams({
        state: selectedState,
        city: selectedCity,
      }).toString(),
    });
  };

  return (
    <Box className={styles.searchCardWrapper}>
      <Box className={styles.searchCard}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          {/* STATE SELECT */}
          <Box className={styles.selectWrapper} id="state">
            <SearchIcon className={styles.icon} />
            <select
              value={selectedState}
              onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(""); }}
              required
            >
              <option value="" disabled>Select State</option>
              {states.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Box>

          {/* CITY SELECT */}
          <Box className={styles.selectWrapper} id="city">
            <SearchIcon className={styles.icon} />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
              required
            >
              <option value="" disabled>Select City</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Box>

          <Button
            type="submit"
            variant="contained"
            className={styles.searchButton}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>

        {/* SERVICES SECTION */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
            You may be looking for
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {services.map((service) => (
              <Grid item key={service.title} xs={6} sm={4} md={2.2}>
                <IconCard img={service.icon} title={service.title} active={service.active}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
