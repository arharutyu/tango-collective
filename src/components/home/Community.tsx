import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
                    bottom: "10%", // Positioned near the bottom
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
            <Typography variant="h3" sx={{ mt: "48px", mb: "48px" }}>
                What we’re hearing from our students and colleages
            </Typography>

            <div
                style={{
                    width: "80%", // Width of the entire feedback section
                    display: "flex",
                    justifyContent: "space-between", // Evenly space out the feedback areas
                    alignItems: "center",
                }}
            >
                {/* Feedback quote 1 */}
                <Box
                    style={{
                        width: "30%", // Each feedback area takes 30% of the width
                        background: "rgba(255, 255, 255, 0.8)", // Slightly transparent white background
                        borderRadius: "8px", // Rounded corners
                        padding: "10px 15px", // Inner padding
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Shadow for better contrast
                        textAlign: "center", // Center-align text
                    }}
                >
                    <Typography
                        variant="body1"
                        style={{ fontStyle: "italic", color: "#333" }}
                    >
                        "This community is amazing! Highly recommended."
                    </Typography>
                </Box>

                {/* Feedback quote 2 */}
                <Box
                    style={{
                        width: "30%",
                        background: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        style={{ fontStyle: "italic", color: "#333" }}
                    >
                        "I've met incredible people here!"
                    </Typography>
                </Box>

                {/* Feedback quote 3 */}
                <Box
                    style={{
                        width: "30%",
                        background: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        style={{ fontStyle: "italic", color: "#333" }}
                    >
                        "A perfect way to connect and engage."
                    </Typography>
                </Box>
            </div>
        </Box>
    </>);
};

export default Community;
