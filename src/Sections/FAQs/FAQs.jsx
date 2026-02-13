// src/sections/FAQs.jsx
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    q: "Why choose our platform for booking?",
    a: "Fast, reliable, verified medical centers and no hidden charges.",
  },
  {
    q: "How do I book an appointment?",
    a: "Select state & city → choose center → pick date & time.",
  },
  {
    q: "Is booking completely free?",
    a: "Yes — center visit booking is 100% free through Medify.",
  },
  {
    q: "What if I need emergency help?",
    a: "Contact nearest hospital or use emergency services directly.",
  },
];

export default function FAQs() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 6, color: "#1a3c5a" }}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((item, i) => (
        <Accordion
          key={i}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography variant="subtitle1" fontWeight="600">
              {item.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}