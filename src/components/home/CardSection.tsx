import OutlineCard from "./OutlineCard";
import { Box } from "@mui/material";

const CardSection = () => {
  const cards = [
    { icon: "/src/assets/BiggerPurpose.svg", header: "A bigger purpose", text: "As any other social dancing, Tango serves our community by connecting one another. Through the tango embrace we can learn to listen and understand those around us and build a strong sense of community. As a global movement, Tango has brought many people a purpose and a sense of identity. Join us and be part of this beautiful way to learn more about yourself, connect with others and exercise." },
    { icon: "/src/assets/UniqueExperience.svg", header: "A unique experience", text: "By engaging with The Tango Collective, besides learning the codes to navigate the tango world in a respectful way, you will be able to access to a bigger community, even to the extend to meet emblematic Tango places around the world." },
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
