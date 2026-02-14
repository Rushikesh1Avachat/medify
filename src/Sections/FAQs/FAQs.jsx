import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import faqImage from '../../assets/faqs-banner.jpg'; 
import heartBadge from '../../assets/piscologist.jpg'; // Ensure this points to the heart icon

const faqs = [
  {
    q: "Why choose our medical for your family?",
    a: "We provide verified medical centers with expert doctors and no hidden charges to ensure your family gets the best care.",
  },
  {
    q: "Why we are different from others?",
    a: "Our platform offers real-time availability and 100% free booking services with transparent patient reviews.",
  },
  {
    q: "Trusted & experience senior care & love",
    a: "We prioritize senior citizens with specialized care packages and easy-to-use booking interfaces.",
  },
  {
    q: "How to get appointment for emergency cases?",
    a: "For emergency cases, you can use our 'Find Hospitals' feature to locate the nearest 24/7 facility immediately.",
  },
];

export default function FAQs() {
  return (
    <Box sx={{ py: 10, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Typography variant="body2" align="center" color="#2AA7FF" fontWeight="600" gutterBottom>
          Get Your Answer
        </Typography>
        <Typography variant="h3" align="center" fontWeight="700" sx={{ mb: 8, color: '#1B3C74' }}>
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={5} alignItems="center">
          {/* Left Column: Image with Overlapping Badges */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
              <img 
                src={faqImage} 
                alt="Doctors and Patient" 
                style={{ width: '100%', maxWidth: '500px', borderRadius: '8px', display: 'block' }} 
              />
              
              {/* Floating Heart Badge - Centered on the right edge */}
              <Box sx={{
                position: 'absolute',
                top: '50%',
                right: '-25px',
                transform: 'translateY(-50%)',
                bgcolor: '#fff',
                borderRadius: '50%',
                p: 1,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                display: { xs: 'none', md: 'flex' },
                zIndex: 2
              }}>
                <img src={heartBadge} alt="heart icon" width={40} height={40} />
              </Box>

              {/* Happy Patients Badge - Bottom Left */}
              <Box sx={{
                position: 'absolute',
                bottom: '20px',
                left: '-30px',
                bgcolor: '#fff',
                p: '15px 20px',
                borderRadius: '8px',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                display: { xs: 'none', md: 'block' }
              }}>
                <Typography variant="h6" sx={{ color: '#1B3C74', fontWeight: '700', lineHeight: 1 }}>
                  84k+
                </Typography>
                <Typography variant="caption" sx={{ color: '#77829D' }}>
                  Happy Patients
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Customized Accordions */}
          <Grid item xs={12} md={6}>
            {faqs.map((item, i) => (
              <Accordion 
                key={i} 
                elevation={0}
                sx={{
                  mb: 1,
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: '0 0 8px 0' }
                }}
              >
                <AccordionSummary 
                  expandIcon={<AddIcon sx={{ color: '#2AA7FF', fontSize: '28px' }} />}
                  sx={{ 
                    px: 0,
                    borderBottom: '1px solid #F0F0F0',
                    '&.Mui-expanded': { borderBottom: 'none' }
                  }}
                >
                  <Typography sx={{ color: '#1B3C74', fontWeight: '600', fontSize: '18px' }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0, pt: 0 }}>
                  <Typography sx={{ color: '#77829D', fontSize: '15px', lineHeight: 1.6 }}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}