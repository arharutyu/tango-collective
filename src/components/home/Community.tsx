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
]
const Community = () => {
    return (<>
        <div
            style={{
                position: "relative", // Enables absolute positioning of child elements
                backgroundImage: "url(/Community.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                maxHeight: "500px",
                height: "400px", // Fixed or dynamic height based on your preference
                overflow: "hidden", // Ensures content doesn't overflow
            }}
        >
            {/* The Typography for the title */}
            <Typography
                variant="huge"
                style={{
                    position: "absolute", // Absolute positioning relative to the parent div
                    top: "20%",
                    left: "50%", // Center horizontally
                    transform: "translate(-50%, -50%)", // Ensure centering works
                    color: "white", // Ensures white text stands out
                    textAlign: "center",
                }}
            >
                Join our Community
            </Typography>

            {/* The icon/logo container */}
            <div
                style={{
                    display: "flex", // Align children horizontally
                    justifyContent: "space-around", // Spreads out icons evenly
                    alignItems: "center", // Align items vertically
                    position: "absolute", // Positioned relative to parent
                    bottom: "20%", // Positioned near the bottom
                    left: "50%",
                    transform: "translateX(-50%)", // Center horizontally
                    width: "60%", // Controls width for positioning of logos
                }}
            >
                {/* Icon 1 */}
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%", // Makes it circular
                        overflow: "hidden", // Ensures the image stays within a circle
                        background: "rgba(89, 0, 0, 0.8)", // A red translucent background
                        display: "flex", // Center the image inside
                        justifyContent: "center",
                        alignItems: "center",
                        backdropFilter: "blur(10px)", // Blurs the background for a subtle effect
                    }}
                >
                    <img
                        src="/partners/MelbourneTangoClub.png"
                        alt="Partner 1"
                        style={{
                            width: "80%", // Scale the image relative to container
                            height: "80%",
                            objectFit: "contain", // Ensures image maintains proportions
                            opacity: "0.8", // Slight transparency
                        }}
                    />
                </div>

                {/* Icon 2 */}
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%", // Makes the element circular
                        overflow: "hidden",
                        background: "rgba(0, 0, 0, 0.3)", // A black translucent background
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backdropFilter: "blur(10px)", // Blurs the background
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
                        borderRadius: "50%", // Makes the element circular
                        overflow: "hidden",
                        background: "rgba(0, 0, 0, 0.3)", // A black translucent background
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backdropFilter: "blur(10px)", // Blurs the background
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
            </div>
        </div>

        <Box className="community-feedback" sx={{textAlign: "center"}}>
            <Typography variant="h3" sx={{mt: "48px"}}>
                What we’re hearing from our students and colleages
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gap: "16px", // Space between items
                    padding: "3em",
                    justifyContent: "center", // Centers the grid itself
                    gridTemplateColumns: {
                        xs: "1fr", // 1 item per row (extra-small)
                        sm: "1fr", // 1 item per row (small)
                        md: "repeat(2, 1fr)", // 2 items per row (medium)
                        lg: "repeat(3, 1fr)", // 3 items per row (large)
                    },
                    placeItems: "center", // Centers children within grid cells
                }}
            >
                {FEEDBACK.map(({text, from}, index) => (
                    <Box
                        key={index}
                        sx={{
                            borderRadius: "8px",
                            textAlign: "left",
                            maxWidth: "250px"
                        }}
                    >
                        <Typography variant="body1" sx={{fontStyle: "italic", color: "var(--text-primary-color)"}}>
                            {text}
                        </Typography>
                        <Typography variant="body1" sx={{fontStyle: "italic", color: "var(--text-primary-color)"}}>
                            <strong>- {from}</strong>
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Box>
    </>);
};

export default Community;
