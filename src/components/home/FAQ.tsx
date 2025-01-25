import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const FAQs: Array<object> = [
    {
      question: "What is Tango?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    { question: "Where can I dance Tango?", text: "" },
    { question: "Do I need a partner to dance Tango?", text: "" },
    { question: "Does Tango have a syllabus like Ballroom?", text: "" },
  ];
  return (
    <div className="faq-container">
      <div className="faq-inner">
        {FAQs.map((faq, ind) => (
          <Accordion key={ind}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{faq.text}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
