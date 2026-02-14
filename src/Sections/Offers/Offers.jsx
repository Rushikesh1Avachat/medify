// src/Sections/Offers/Offers.jsx
import { Container, Box, Stack } from '@mui/material';
import group10 from '../../assets/Group 10.jpg';
import group11 from '../../assets/Group 11.jpg';
import group12 from '../../assets/Group 12.jpg';

export default function Offers() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Main Row of Banners */}
      <Stack 
        direction="row" 
        spacing={3} 
        sx={{ 
          overflowX: { xs: 'auto', md: 'hidden' }, 
          justifyContent: 'center',
          alignItems: 'center',
          // Removed the margin bottom since dots are gone
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        <Box 
          component="img" 
          src={group10} 
          alt="Practo Offer" 
          sx={{ width: 'auto', height: 'auto', borderRadius: '12px', flexShrink: 0 }} 
        />
        <Box 
          component="img" 
          src={group11} 
          alt="Zoutons 30% Off" 
          sx={{ width: 'auto', height: 'auto', borderRadius: '12px', flexShrink: 0 }} 
        />
        <Box 
          component="img" 
          src={group12} 
          alt="Practo Offer Duplicate" 
          sx={{ 
            width: 'auto', 
            height: 'auto', 
            borderRadius: '12px', 
            flexShrink: 0, 
            border: '2px solid #2AA7FF' // Matches the highlighted banner in design
          }} 
        />
      </Stack>

      {/* Pagination dots Stack has been removed from here */}
    </Container>
  );
}