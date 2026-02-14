import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Typography } from "@mui/material";
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

  // =============================
  // Fetch States
  // =============================
  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => {
        setStates(res.data || []);
      })
      .catch((err) => console.error("States fetch error:", err));
  }, []);

  // =============================
  // Fetch Cities when state changes
  // =============================
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      return;
    }

    axios
      .get(
        `https://meddata-backend.onrender.com/cities/${encodeURIComponent(
          selectedState
        )}`
      )
      .then((res) => {
        setCities(res.data || []);
      })
      .catch((err) => {
        console.error("Cities fetch error:", err);
        setCities([]);
      });
  }, [selectedState]);

  // =============================
  // Handle Search
  // =============================
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
    <Box className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.form}>
        
        {/* ===== STATE DROPDOWN ===== */}
        <div id="state" className={styles.inputWrapper}>
          <SearchIcon className={styles.inputIcon} />
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
            className={styles.select}
            required
          >
            <option value="" disabled>
              State
            </option>

            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* ===== CITY DROPDOWN ===== */}
        <div id="city" className={styles.inputWrapper}>
          <SearchIcon className={styles.inputIcon} />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className={styles.select}
            disabled={!selectedState}
            required
          >
            <option value="" disabled>
              City
            </option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* ===== SEARCH BUTTON ===== */}
        <button
          type="submit"
          id="searchBtn"
          className={styles.searchButton}
        >
          <SearchIcon /> Search
        </button>
      </form>

      {/* ===== SERVICES SECTION ===== */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h6" className={styles.servicesHeading}>
          You may be looking for
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          {services.map((service) => (
            <Grid item key={service.title} xs={6} sm={4} md={2.2}>
              <IconCard
                img={service.icon}
                title={service.title}
                active={service.active}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
