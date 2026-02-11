import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const state = query.get("state");
  const city = query.get("city");

  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (state && city) {
      axios.get(`https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`)
        .then(res => setHospitals(res.data || []))
        .catch(err => console.error(err));
    }
  }, [state, city]);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        {hospitals.length} medical centers available in {city}
      </Typography>

      <Grid container spacing={3}>
        {hospitals.map((hosp, i) => (
          <Grid item xs={12} md={6} key={i}>
            <HospitalCard hospital={hosp} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Search;




