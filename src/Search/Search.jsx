import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Stack, Grid } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";
import checkmarkIcon from "../assets/tick.jpg";
import offerBanner from "../assets/cta.jpg";
import styles from "./Search.module.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state || !city) return;
    setLoading(true);
    axios.get(`https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`)
      .then(res => setHospitals(res.data || []))
      .catch(() => setHospitals([]))
      .finally(() => setLoading(false));
  }, [state, city]);

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.blueHero}>
        <Container maxWidth="lg">
          <Box className={styles.searchCardWrapper}><SearchBar /></Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 12, pb: 8 }}>
        {loading ? (
          <Typography variant="h5" sx={{ py: 10, textAlign: "center" }}>Finding medical centers...</Typography>
        ) : (
          <>
            <h1 className={styles.resultsCount}>
              {hospitals.length} medical centers available in {city.toLowerCase()}
            </h1>

            <Box className={styles.subInfo} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <img src={checkmarkIcon} alt="verified" width="22" />
              <Typography variant="body2">
                Book appointments with minimum wait-time & verified doctor details
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={8}>
                <Stack spacing={3}>
                  {hospitals.length > 0 ? hospitals.map((h, i) => <HospitalCard key={i} data={h} />)
                    : <Typography variant="h6" sx={{ py: 10, textAlign: "center" }}>No medical centers found in this city.</Typography>}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ position: "sticky", top: 80 }}>
                  <img src={offerBanner} alt="Special Offer" style={{ width: "100%", borderRadius: 16 }} />
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
