import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Stack } from "@mui/material";
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
    if (!state || !city) return setHospitals([]);
    setLoading(true);
    axios
      .get(`https://meddata-backend.onrender.com/data?state=${encodeURIComponent(state)}&city=${encodeURIComponent(city)}`)
      .then(res => setHospitals(res.data || []))
      .catch(() => setHospitals([]))
      .finally(() => setLoading(false));
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
          <Typography variant="h5" sx={{ py: 10, textAlign: "center" }}>Finding medical centers...</Typography>
        ) : (
          <>
            <h1 className={styles.resultsCount}>
              {hospitals.length} medical centers available in {city.toLowerCase()}
            </h1>

            <Box className={styles.subInfo}>
              <img src={checkmarkIcon} alt="verified" width="22" />
              <Typography>Book appointments with minimum wait-time & verified doctor details</Typography>
            </Box>

            <Stack spacing={4} sx={{ mt: 4 }}>
              {hospitals.length > 0 ? (
                hospitals.map(hospital => (
                  <Box key={hospital["Hospital Name"]} className={styles.resultRow}>
                    <HospitalCard data={hospital} />
                    <Box className={styles.bannerWrapper}>
                      <img src={offerBanner} alt="Offer Banner" className={styles.adImage} />
                    </Box>
                  </Box>
                ))
              ) : (
                <Box className={styles.emptyBox}>
                  <Typography variant="h6">No medical centers found.</Typography>
                </Box>
              )}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}

