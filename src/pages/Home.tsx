import Hero from "../components/home/Hero";
import ArtOfConnecting from "../components/home/ArtOfConnecting";
import PrivateClass from "../components/home/PrivateClass";
import CardSection from "../components/home/CardSection";
import Community from "../components/home/Community";
import FAQ from "../components/home/FAQ";
import Stack from "@mui/material/Stack";

const Home = () => {
    return (
        <>
            <Stack spacing={2}>
                <Hero/>
                <ArtOfConnecting/>
                <CardSection/>
                <PrivateClass/>
                <Community/>
                <FAQ/>
            </Stack>
        </>
    );
};

export default Home;
