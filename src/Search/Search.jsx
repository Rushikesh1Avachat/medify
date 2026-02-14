import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state || !city) return;

    const fetchHospitals = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`
        );
        setHospitals(res.data || []);
      } catch (err) {
        setError("Failed to load medical centers.");
        setHospitals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [state, city]);

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.blueHero}>
        <Container maxWidth="lg">
          <Box className={styles.searchCardWrapper}>
            <SearchBar />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 12, pb: 8 }}>
        {loading ? (
          <Box sx={{ py: 10, textAlign: "center" }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Finding medical centers...
            </Typography>
          </Box>
        ) : (
          <>
            {error ? (
              <Alert severity="info" sx={{ mb: 4 }}>
                {error}
              </Alert>
            ) : (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
                >
                  {hospitals.length} medical centers available in {city.toLowerCase()}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                  <img src={checkmarkIcon} alt="verified" width="22" />
                  <Typography variant="body2">
                    Book appointments with minimum wait-time & verified doctor details
                  </Typography>
                </Box>
              </Box>
            )}

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {hospitals.length > 0 ? (
                  <Stack spacing={3}>
                    {hospitals.map((h, i) => (
                      <HospitalCard key={i} data={h} />
                    ))}
                  </Stack>
                ) : (
                  !error && (
                    <Typography variant="h6" sx={{ py: 10, textAlign: "center" }}>
                      No medical centers found.
                    </Typography>
                  )
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ position: "sticky", top: 80 }}>
                  <img
                    src={offerBanner}
                    alt="Special Offer"
                    style={{ width: "100%", borderRadius: 16 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}