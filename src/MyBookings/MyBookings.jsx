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

  // Load bookings and normalize keys
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    const normalized = saved.map((b) => ({
      hospitalName: b.hospitalName || b["Hospital Name"] || "",
      city: b.city || b.City || "",
      state: b.state || b.State || "",
      date: b.date || "",
      time: b.time || "",
    }));
    setBookings(normalized);
    setFilteredBookings(normalized);
  }, []);

  // Search filter
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredBookings(bookings);
      return;
    }

    setFilteredBookings(
      bookings.filter(
        (b) =>
          b.hospitalName &&
          b.hospitalName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <Box className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <Box className={styles.blueHero}>
        <Container maxWidth="lg">
          <h1 className={styles.heroTitle}>My Bookings</h1>

          <Box
            component="form"
            onSubmit={handleSearch}
            className={styles.searchBarContainer}
          >
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

      {/* CONTENT SECTION */}
      <Container maxWidth="lg" className={styles.contentWrapper}>
        <Box className={styles.rowLayout}>
          {/* LEFT: Bookings List */}
          <Box className={styles.leftSection}>
            {filteredBookings.length > 0 ? (
              <Stack spacing={3}>
                {filteredBookings.map((b, idx) => (
                  <HospitalCard
                    key={idx}
                    data={{
                      ...b,
                      "Hospital Name": b.hospitalName,
                      City: b.city,
                      State: b.state,
                    }}
                    booking={true}
                  />
                ))}
              </Stack>
            ) : (
              <Box className={styles.emptyState}>
                <Typography variant="h6">No bookings found.</Typography>
              </Box>
            )}
          </Box>

          {/* RIGHT: Promotional Banner */}
          {filteredBookings.length > 0 && (
            <Box className={styles.rightSection}>
              <img
                src={offerBanner}
                alt="Promotional Banner"
                className={styles.adImage}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
