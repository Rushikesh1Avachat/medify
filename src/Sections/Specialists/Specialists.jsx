// src/sections/Specialists.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container, Typography, Avatar, Box, Paper } from '@mui/material';

// Replace with your actual doctor images
import doc1 from '../../assets/ankur.jpg';
import doc2 from '../../assets/ahmad-stevens.jpg';
import doc3 from '../../assets/ahmad.jpg';

const doctors = [
  { name: "Dr. Ankur",   img: doc1, specialty: "Cardiologist" },
  { name: "Dr. Ahmad",   img: doc2, specialty: "General Physician" },
  { name: "Dr. Ahmad Stevens", img: doc3, specialty: "Neurologist" },
  { name: "Dr. Prerna Narang", img: doc1, specialty: "Gynecologist" },
  { name: "Dr. Rajesh Kumar",  img: doc2, specialty: "Orthopedic" },
];

export default function Specialists() {
  return (
    <Box sx={{ bgcolor: "#f8fcff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6, color: "#1a3c5a" }}
        >
          Our Medical Specialists
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 2 },
            960:  { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {doctors.map((doc, i) => (
            <SwiperSlide key={i}>
              <Paper
                elevation={3}
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 4,
                  mx: 1,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.04)" },
                }}
              >
                <Avatar
                  src={doc.img}
                  alt={doc.name}
                  sx={{
                    width: 140,
                    height: 140,
                    mx: "auto",
                    mb: 2,
                    border: "4px solid #2aa7ff",
                  }}
                />
                <Typography variant="h6" fontWeight="bold" color="#1a3c5a">
                  {doc.name}
                </Typography>
                <Typography variant="body2" color="primary" mt={0.5}>
                  {doc.specialty}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}