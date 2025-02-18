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
                <div style={{flex: 1, padding: "10px"}}>
                    <Typography variant="h1">Why Tango</Typography>
                </div>

                <div style={{flex: 3, padding: "10px"}}>
                    <Typography variant="h5" component="p">
                        Tango is a partner dance that allow us to connect with our body and
                        with the person we are dancing with. It is a dance of mutual
                        understanding, self-discovery and social awareness. By understanding
                        the codes of Tango social dancing you will earn powerful tools to
                        provide and receive information that can be implemented on your
                        communication skills.
                    </Typography>
                    <Typography variant="h5" component="p">
                        Marce Ospina and her collaborators will take
                        you through this journey and share her knowledge on how to navigate
                        the dance floor and how to connect with your body and other social
                        dancers.
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
