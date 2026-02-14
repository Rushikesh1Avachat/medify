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
    const saved = localStorage.getItem("bookings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setBookings(parsed);
      setFilteredBookings(parsed);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setFilteredBookings(bookings);
      return;
    }

    const filtered = bookings.filter((b) =>
      b["Hospital Name"]
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    setFilteredBookings(filtered);
  };

  return (
    <Box className={styles.pageWrapper}>
      {/* ===== HERO ===== */}
      <Box className={styles.blueHero}>
        <Container maxWidth="lg" className={styles.heroContainer}>
          <Typography variant="h4" className={styles.heroTitle}>
            My Bookings
          </Typography>

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
                      className={styles.searchButton}
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

      {/* ===== MAIN CONTENT (ONE ROW FLEX) ===== */}
      <Container maxWidth="lg" className={styles.contentWrapper}>
        <Box className={styles.rowLayout}>
          
          {/* LEFT: Booking Cards */}
          <Box className={styles.leftSection}>
            {filteredBookings.length > 0 ? (
              <Stack spacing={3}>
                {filteredBookings.map((booking, index) => (
                  <HospitalCard
                    key={index}
                    data={booking}
                    isBooking={true}
                  />
                ))}
              </Stack>
            ) : (
              <Box className={styles.emptyState}>
                <Typography variant="h6">
                  No bookings found.
                </Typography>
              </Box>
            )}
          </Box>

          {/* RIGHT: Single CTA */}
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
