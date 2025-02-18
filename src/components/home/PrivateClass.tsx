import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PrivateClass = () => {
    return (
        <>
            <Box
                sx={{
                    width: {
                        xs: "100vw",
                        sm: "80vw",
                        md: "60vw",
                        lg: "50vw"
                    },
                    padding: 2,
                    paddingLeft: {
                        md: 8
                    },
                    marginTop: 2,
                }}
            >
                <Typography variant="h3" component="p">Book your next private class</Typography>
                <Typography variant="body2" style={{ fontStyle: 'italic' }}>*Private class passes must be used within 3 months maximum</Typography>
                <Typography variant="body2"style={{ fontStyle: 'italic' }}>*Price does not include studio hire</Typography>
            </Box>
        </>
    );
};

export default PrivateClass;
