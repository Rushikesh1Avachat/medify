// src/sections/Specialization.jsx
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Replace paths with your actual image files
import cardiology from '../../assets/cardiology.jpg';
import capsule   from '../../assets/Capsule.jpg';
// ... add more imports as needed

const items = [
  { title: "Dentistry",         img: capsule },
  { title: "Internal Medicine", img: cardiology },
  { title: "Cardiology",        img: cardiology },
  { title: "ENT Specialist",    img: capsule },
  { title: "Bone specialists",  img: cardiology },
  { title: "General physician", img: capsule },
  { title: "Diagnostics",       img: cardiology },
  { title: "Ayurveda",          img: capsule },
];

export default function Specialization() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 6, color: "#1a3c5a" }}
      >
        Find by Specialisation
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {items.map((item, i) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={i}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.25s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
                sx={{ objectFit: "contain", p: 3, bgcolor: "#f8fcff" }}
              />
              <CardContent sx={{ pb: 3 }}>
                <Typography variant="subtitle1" fontWeight="600" align="center">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}