import { Container, Typography, Grid, Box } from '@mui/material';
import BlogCard from './BlogCard';
import detoxImg from '../../assets/blog.jpg';
import authorImg from '../../assets/ahmad-stevens.jpg';

const blogs = [
  { image: detoxImg, authorImg: authorImg, date: "March 31, 2022", title: "6 Tips To Protect Your Mental Health" },
  { image: detoxImg, authorImg: authorImg, date: "March 31, 2022", title: "6 Tips To Protect Your Mental Health" },
  { image: detoxImg, authorImg: authorImg, date: "March 31, 2022", title: "6 Tips To Protect Your Mental Health" },
];

export default function Blogs() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="body2" align="center" color="#2AA7FF" fontWeight="600">Blog & News</Typography>
        <Typography variant="h3" align="center" fontWeight="700" sx={{ mb: 6, color: '#1B3C74' }}>Read Our Latest News</Typography>
        <Grid container spacing={4}>
          {blogs.map((post, i) => (
            <Grid item xs={12} md={4} key={i}>
              <BlogCard data={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}