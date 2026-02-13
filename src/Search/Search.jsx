// src/pages/Search/SearchResults.jsx   (or rename file if needed)
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import HospitalCard from '../components/HospitalCard/HospitalCard';

export default function Search() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get('state');
  const city = searchParams.get('city');

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state || !city) return;
    setLoading(true);
    axios.get(`https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`)
      .then(res => {
        setHospitals(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [state, city]);

  if (loading) {
    return <Typography align="center" py={10}>Loading medical centers... (may take 50-60s)</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" gutterBottom fontWeight="bold">
        {hospitals.length} medical centers available in {city?.toLowerCase()}
      </Typography>

      <Grid container spacing={3}>
        {hospitals.map((hospital, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HospitalCard hospital={hospital} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}