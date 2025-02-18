// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

import "./home.css";
// Import Swiper styles
// @ts-expect-error not sure why it cant recognize cos it works
import "swiper/css";
// @ts-expect-error not sure why it cant recognize cos it works
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper/modules";
import CarouselCard from "./CarouselCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ArtOfConnecting = () => {
    const cards = [
        {
            photo: "/carousel/CorporateTango.png",
            text: {
                title: "Corporate Tango",
                subtitle: "Beginners Class",
                text: "Ideal for: those who are new to a dancing activity"
            }
        },
        {
            photo: "/carousel/IntermediateWorkshops.jpg",
            text: {
                title: "Tango for all!",
                subtitle: "Beginners Class",
                text: "Ideal for: those who are new to a dancing activity "
            }
        },
        {
            photo: "/carousel/Show.png",
            text: {
                title: "Intermediate Workshops",
                subtitle: "Intermediate level  Class",
                text: "Ideal for: those with previous dancing experience"
            }
        },
        {
            photo: "/carousel/SocialDance.jpg",
            text:
                {
                    title: "Followers’ Technique",
                    subtitle: "Open Level Class",
                    text: "Ideal for: dancers wanting to work on Footwork and Styling"
                }
        },
        {
            photo: "/carousel/TangoForAll.jpg",
            text:
                {
                    title: "Time to implement the knowledge!",
                    subtitle: "Socials - Milongas & Practicas",
                    text: "Ideal for: those ready to mingle with other dancers"
                }
        },
        {
            photo: "/carousel/TangoForAll.jpg",
            text:
                {
                    title: "Show must go on!",
                    subtitle: "Styling class, all genders welcome!",
                    text: "Ideal for: those who are keen on performing"
                }
        },
    ];

    return (<>
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
            }}
        >
            <Typography variant="h3" component="div">
                The art of connecting
            </Typography>
            <Typography variant="body1" component="div">
                Explore different ways in which you can develop your tango skills. Each class is tailored for specific
                style, level and role. Come along and discover what tango can do for you!
            </Typography>
        </Box>
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            centeredSlides={true}
            style={{
                marginTop: "16px",
                marginBottom: "40px",
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                0: { // Default for small screens
                    slidesPerView: 1,
                    spaceBetween: 10, // Minimal spacing for small mobile screens
                },
                768: { // Tablet-sized screens
                    slidesPerView: 2,
                    spaceBetween: 20, // Slightly increased space
                },
                1200: { // Larger screens
                    slidesPerView: 3,
                    spaceBetween: 30, // Standard larger spacing
                },
                1600: { // Extra-large screens or desktops
                    slidesPerView: 4,
                    spaceBetween: 40, // Increase spacing for wider layouts
                },
            }}

        >
            {cards.map((card, index) => (
                <SwiperSlide key={index} className="swiper-slider">
                    <CarouselCard photo={card.photo} text={card.text}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </>);
};

export default ArtOfConnecting;
