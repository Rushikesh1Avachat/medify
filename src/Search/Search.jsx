// src/Search/SearchResults.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import HospitalCard from '../components/HospitalCard/HospitalCard';

 function Search() {
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

  if (loading) return <Typography sx={{ textAlign: 'center', py: 10 }}>Loading...</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" sx={{ mb: 6 }}>
        {hospitals.length} medical centers available in {city?.toLowerCase() || 'this city'}
      </Typography>

      <Grid container spacing={4}>
        {hospitals.map((h, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <HospitalCard hospital={h} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Search