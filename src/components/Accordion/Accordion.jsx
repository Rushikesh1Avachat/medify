import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = () => {
  return (
    <>
      <MuiAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I book an appointment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Select state, city and choose a medical center.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>

      <MuiAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Is booking free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, booking a center visit is completely free.
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </>
  );
};

export default Accordion;   // ✅ REQUIRED
