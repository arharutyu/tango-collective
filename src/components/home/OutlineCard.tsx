// noinspection JSRemoveUnnecessaryParentheses

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const OutlineCard: React.FC<{ icon: React.ReactNode; header: string; text: string }> = ({ icon, header, text }) => {
  return (
    <Box sx={{ minWidth: "275px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px", // Rounded corners for the card
          padding: 2, // Add padding inside the card
          borderColor: "#ddd", // Light border color
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Icon placed above the header */}
          <Box sx={{ mb: 1 }}>
            {icon}
          </Box>

          {/* Header centered above the text */}
          <Typography variant="h5" component="div" sx={{ textAlign: "center", fontWeight: "bold", mb: 1 }}>
            {header}
          </Typography>

          {/* Text below the header */}
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OutlineCard;
