// src/pages/MyBookings.jsx
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import offerBanner from "../assets/offer2.jpg";
import styles from "./MyBookings.module.css";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);
    setFilteredBookings(saved);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredBookings(bookings);
      return;
    }
    const query = searchQuery.toLowerCase();
    setFilteredBookings(
      bookings.filter((b) => b.hospitalName.toLowerCase().includes(query))
    );
  };

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.blueHero}>
        <Container maxWidth="lg" className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>My Bookings</h1>

          <Box component="form" onSubmit={handleSearch} className={styles.searchBarContainer}>
            <TextField
              fullWidth
              placeholder="Search by Hospital"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      type="submit"
                      id="searchBtn"
                      variant="contained"
                      startIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" className={styles.contentWrapper}>
        <Box className={styles.rowLayout}>
          <Box className={styles.leftSection}>
            {filteredBookings.length > 0 ? (
              <Stack spacing={3}>
                {filteredBookings.map((b, idx) => (
                  <HospitalCard
                    key={idx}
                    booking={true}
                    data={{
                      "Hospital Name": b.hospitalName,
                      City: b.city,
                      State: b.state,
                      date: b.date,
                      time: b.time,
                    }}
                  />
                ))}
              </Stack>
            ) : (
              <Box className={styles.emptyState}>
                <Typography variant="h6">No bookings found.</Typography>
              </Box>
            )}
          </Box>

          <Box className={styles.rightSection}>
            <img
              src={offerBanner}
              alt="Promotional Banner"
              className={styles.adImage}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}