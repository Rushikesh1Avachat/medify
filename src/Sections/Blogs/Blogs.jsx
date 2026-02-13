// src/sections/Blogs.jsx
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import detoxImg from '../../assets/blog.jpg'; // reuse your detox/blog images

const blogs = [
  { title: 'DETOX', img: detoxImg },
  { title: 'DETOX', img: detoxImg },
  { title: 'DETOX', img: detoxImg },
];

export default function Blogs() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Read Our Latest News
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {blogs.map((post, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <CardMedia component="img" height="220" image={post.img} alt={post.title} />
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}