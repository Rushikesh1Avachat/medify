// src/pages/Search/SearchResults.jsx
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state || !city) return;
    setLoading(true);

    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
          state
        )}&city=${encodeURIComponent(city)}`
      )
      .then((res) => {
        setHospitals(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [state, city]);

  return (
    <Box className={styles.pageWrapper}>
      {/* Hero */}
      <Box className={styles.blueHero}>
        <Container maxWidth="lg">
          <Box className={styles.searchBarContainer}>
            <SearchBar smallVariant={true} />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 12, pb: 8 }}>
        {loading ? (
          <Typography variant="h5" sx={{ py: 10, textAlign: "center" }}>
            Finding medical centers...
          </Typography>
        ) : (
          <>
            {/* Result Header */}
            <Typography className={styles.resultsCount}>
              {hospitals.length} medical centers available in {state}
            </Typography>

            <Box className={styles.subInfo}>
              <img src={checkmarkIcon} alt="verified" width="22" />
              <Typography>
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Box>

            {/* Side by Side Rows */}
            <Stack spacing={4} sx={{ mt: 4 }}>
              {hospitals.map((hospital, index) => (
                <Box key={index} className={styles.resultRow}>
                  <HospitalCard data={hospital} />

                  <Box className={styles.bannerWrapper}>
                    <img
                      src={offerBanner}
                      alt="Offer Banner"
                      className={styles.adImage}
                    />
                  </Box>
                </Box>
              ))}

              {hospitals.length === 0 && (
                <Box className={styles.emptyBox}>
                  <Typography variant="h6">
                    No medical centers found.
                  </Typography>
                </Box>
              )}
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}
