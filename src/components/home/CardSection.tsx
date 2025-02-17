import OutlineCard from "./OutlineCard";
import { Box } from "@mui/material";

const CardSection = () => {
  const cards = [
    { icon: "", header: "A bigger purpose", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse sapien massa, convallis a pellentesque nec, egestas non nisi." },
    { icon: "", header: "A unique experience", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse sapien massa, convallis a pellentesque nec, egestas non nisi." },
  ];
  
  return (
    <Box 
      sx={{
        display: "flex",           // Display items in a row
        justifyContent: "space-evenly",  // Evenly space the cards
        gap: 2,                    // Add some space between the cards
        flexWrap: "wrap",          // Allow wrapping on smaller screens
        padding: 2,                // Padding around the section
      }}
    >
      {cards.map((card, index) => (
        <OutlineCard
          key={index}
          icon={card.icon}
          header={card.header}
          text={card.text}
        />
      ))}
    </Box>
  );
};

export default CardSection;
