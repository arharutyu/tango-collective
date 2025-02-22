import Typography from "@mui/material/Typography";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/banner.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
                position: "relative",
            }}
        >
            {/* Text in top-right */}
            <div
                style={{
                    position: "absolute",
                    top: "40px", // Adjust as needed for vertical positioning
                    right: "40px", // Adjust as needed for horizontal positioning
                    zIndex: 1, // Ensures text is above the image
                    color: "black", // Text color
                    textAlign: "right"
                }}
            >
                <Typography variant="hero" style={{ fontWeight: "bold" }}>
                    Tango, the art to
                </Typography><br />
                <Typography variant="hero" style={{ fontWeight: "bold" }}>
                    connect with
                </Typography><br />

                <Typography variant="hero" style={{ fontWeight: "bold" }}>
                    others and
                </Typography><br />

                <Typography variant="hero" style={{ fontWeight: "bold" }}>
                    oneself
                </Typography>
            </div>

            {/* Main Content */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // 60% transparent black
                    color: "white",
                    display: "flex",
                    padding: "20px",
                }}
            >
                <div style={{ flex: 1, padding: "10px" }}>
                    <Typography variant="h1">Why Tango</Typography>
                </div>

                <div style={{ flex: 3, padding: "10px" }}>
                    <Typography variant="h5" component="p">
                        Tango is a partner dance that allows us to connect with our body and
                        with the person we are dancing with. It is a dance of mutual
                        understanding, self-discovery, and social awareness. By understanding
                        the codes of Tango social dancing, you will earn powerful tools to
                        provide and receive information that can be implemented in your
                        communication skills.
                    </Typography>
                    <Typography variant="h5" component="p">
                        Marce Ospina and her collaborators will take you through this journey
                        and share her knowledge on how to navigate the dance floor and how to
                        connect with your body and other social dancers.
                    </Typography>
                    <Typography variant="h5" component="p">
                        Come along and discover your endless potential!
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Hero;
