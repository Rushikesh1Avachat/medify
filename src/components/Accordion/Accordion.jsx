import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Accordion() {
  return (
    <>
      <MuiAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-booking-content"
          id="faq-booking-header"
        >
          {/* Use semantic heading */}
          <Typography component="h3" variant="h6">
            How do I book an appointment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="p">
            Select state and city, then choose a medical center and book an
            available slot.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>

      <MuiAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-free-content"
          id="faq-free-header"
        >
          <Typography component="h3" variant="h6">
            Is booking free?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="p">
            Yes, booking a medical center visit is completely free.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </>
  );
}

export default Accordion;
   // ✅ REQUIRED
