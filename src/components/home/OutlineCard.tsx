// noinspection JSRemoveUnnecessaryParentheses

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const OutlineCard: React.FC<{ icon: React.ReactNode; header: string; text: string }> = ({icon, header, text}) => {
    return (
        <Box sx={{minWidth: "375px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card
                variant="outlined"
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    minHeight: 310,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "24px", // Rounded corners for the card
                    padding: 2, // Add padding inside the card
                    borderColor: "#ddd", // Light border color
                    borderWidth: "2px",
                }}
            >
                <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {/* Icon placed above the header */}
                    <Box sx={{mb: 1}}>
                        {/*// @ts-expect-error doesn't recognize src has value */}
                        <img src={icon} alt={`${header} icon`} style={{width: "50px", height: "50px"}}/>
                    </Box>


                    {/* Header centered above the text */}
                    <Typography variant="h3" component="div" sx={{textAlign: "center", fontWeight: "bold", mb: 1}}>
                        {header}
                    </Typography>

                    {/* Text below the header */}
                    <Typography variant="body2" sx={{textAlign: "center"}}>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default OutlineCard;
