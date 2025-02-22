import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const FAQs: Array<{ question: string; text: string }> = [
    {
      question: "What is Tango?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    { question: "Where can I dance Tango?", text: "" },
    { question: "Do I need a partner to dance Tango?", text: "" },
    { question: "Does Tango have a syllabus like Ballroom?", text: "" },
  ];
  return (
    <>
      <div className="faq-container">
        <Typography component="h1">Frequently Asked Questions</Typography>
        <div className="faq-inner">
          {FAQs.map((faq, ind) => (
              <Accordion
                  key={ind}
                  sx={{
                    boxShadow: "none", // Removes default shadow
                    backgroundColor: "transparent", // Set background to transparent
                    "& .MuiAccordionSummary-root": {
                      backgroundColor: "transparent", // Transparent background for summary
                      color: "black", // Set text color to black
                    },
                    "& .MuiAccordionDetails-root": {
                      color: "black", // Set text color to black
                      backgroundColor: "transparent", // Transparent background for details
                    },
                    "& .MuiAccordionSummary-content": {
                      color: "black", // Set text color to black
                    },
                  }}
              >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                  <Typography component="span" variant="h4">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{faq.text}</Typography>
                </AccordionDetails>
              </Accordion>
          ))}
        </div>

      </div>
    </>
  );
};

export default FAQ;
