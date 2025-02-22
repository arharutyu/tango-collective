import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FEEDBACK = [
    {
        text: "Marce’s experience in tango have given our group a new perspective about how to engage in a partner dance and how preserve the community values in a dancing context.",
        from: "Tango on the Bay"
    },
    {
        text: "Working with Marce has enabled school students to understand better the tango codes and commence their tango journey with confidence and joy.",
        from: "La Encantada Collective"
    },
    {
        text: "Marce is a patience and knowledgeable teacher. Her teachings have enriched my dance skills and confidence",
        from: "Noune & Vahram"
    }
];

const Community = () => {
    return (
        <>
            <div
                style={{
                    position: "relative", // Container for background image
                    backgroundImage: "url(/Community.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    maxHeight: "500px",
                    height: "400px",
                    overflow: "hidden", // Ensures content doesn't overflow
                    display: "flex", // Using flexbox for content positioning
                    flexDirection: "column", // Stacking items vertically
                    justifyContent: "center", // Vertically center content
                    alignItems: "center", // Horizontally center content
                    paddingTop: "30px", // Adds space at the top for mobile
                    height: "auto",
                    minHeight: "350px"
                }}
            >
                {/* The Typography for the title */}
                <Typography
                    variant="h2" // Adjusted to use an appropriate size
                    sx={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "20px", // Adds some margin below the text
                    }}
                >
                    Join our Community
                </Typography>

                {/* The icon/logo container */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "60%",
                        flexDirection: { xs: "column", sm: "row" }, // Flex column on small screens, row on medium+
                        gap: 2, // Adds space between icons
                        marginBottom: '30px'
                    }}
                >
                    {/* Icon 1 */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%", // Makes it circular
                            overflow: "hidden",
                            background: "rgba(89, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <img
                            src="/partners/MelbourneTangoClub.png"
                            alt="Partner 1"
                            style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain",
                                opacity: "0.8",
                            }}
                        />
                    </div>

                    {/* Icon 2 */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            background: "rgba(0, 0, 0, 0.3)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <img
                            src="/partners/MTS.png"
                            alt="Partner 2"
                            style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain",
                                opacity: "0.8",
                            }}
                        />
                    </div>

                    {/* Icon 3 */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            background: "rgba(0, 0, 0, 0.3)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <img
                            src="/partners/TangoEventsAu.webp"
                            alt="Partner 3"
                            style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain",
                                opacity: "0.8",
                            }}
                        />
                    </div>
                </Box>
            </div>

            <Box className="community-feedback" sx={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ mt: "48px" }}>
                    What we’re hearing from our students and colleagues
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: "16px",
                        padding: "3em",
                        justifyContent: "center",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                        },
                        placeItems: "center",
                    }}
                >
                    {FEEDBACK.map(({ text, from }, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: "8px",
                                textAlign: "left",
                                maxWidth: "250px",
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: "italic", color: "var(--text-primary-color)" }}
                            >
                                {text}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: "italic", color: "var(--text-primary-color)" }}
                            >
                                <strong>- {from}</strong>
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Community;
