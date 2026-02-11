// src/Search/Search.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";

function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const state = query.get("state");
  const city = query.get("city");

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (state && city) {
      fetch(
        `https://meddata-backend.onrender.com/hospitals?state=${encodeURIComponent(
          state
        )}&city=${encodeURIComponent(city)}`
      )
        .then((res) => res.json())
        .then((data) => setHospitals(data || []))
        .catch((err) => console.error(err));
    }
  }, [state, city]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Hospitals in {city}, {state}
      </Typography>

      {hospitals.length === 0 ? (
        <Typography color="text.secondary">No hospitals found.</Typography>
      ) : (
        <Grid container spacing={4}>
          {hospitals.map((hosp, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <HospitalCard hospital={hosp} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Search;




