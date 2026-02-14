import { Box, Typography, Container, Stack } from "@mui/material";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import { useEffect, useState } from "react";
import cta from "../assets/cta.png";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";

 function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Load bookings safely
  useEffect(() => {
    try {
      const stored = localStorage.getItem("bookings");
      const parsed = stored ? JSON.parse(stored) : [];
      // Make sure it's always an array
      setBookings(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error("Failed to load bookings from localStorage:", err);
      setBookings([]);
    }
  }, []);

  // Sync filtered list when bookings change
  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <>
      <NavBar />

      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          minHeight: "100vh",
        }}
      >
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>

              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: { md: "0 50px" } }}
                width={{ xs: 1, md: "auto" }}
              >
                <SearchBar
                  list={bookings}
                  filterList={setFilteredBookings}
                />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 2, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={{ xs: 4, md: 3 }}
          >
            <Stack
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr={{ md: "24px" }}
            >
              {filteredBookings.length > 0 ? (
                filteredBookings.map((hospital, index) => (
                  <HospitalCard
                    key={
                      hospital["Hospital Name"] ||
                      hospital.id ||
                      `booking-${index}`
                    }
                    details={hospital}
                    booking={true}
                  />
                ))
              ) : (
                <Box
                  bgcolor="#fff"
                  p={4}
                  borderRadius={2}
                  boxShadow="0 2px 12px rgba(0,0,0,0.08)"
                  textAlign="center"
                >
                  <Typography variant="h5" color="text.secondary" fontWeight={500}>
                    No bookings found
                  </Typography>
                  <Typography variant="body1" color="text.secondary" mt={1}>
                    You haven't booked any hospitals yet.
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box
              component="img"
              src={cta}
              alt="Call to action - Book your next appointment"
              sx={{
                width: { xs: "100%", md: 360 },
                height: "auto",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
export default MyBookings