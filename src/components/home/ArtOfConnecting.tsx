import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./home.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CarouselCard from "./CarouselCard";

const ArtOfConnecting = () => {
  const cards = [
    { photo: "/carousel/CorporateTango.png", text: "Card 1 Text" },
    { photo: "/carousel/IntermediateWorkshops.jpg", text: "Card 2 Text" },
    { photo: "/carousel/Show.png", text: "Card 3 Text" },
    { photo: "/carousel/SocialDance.jpg", text: "Card 4 Text" },
    { photo: "/carousel/TangoForAll.jpg", text: "Card 5 Text" },
  ];

  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        640: { 
          slidesPerView: 1, 
          spaceBetween: 20,  // Reduce space on mobile
        },
        768: { 
          slidesPerView: 2,
          spaceBetween: 20,  // Reduce space on tablets
        },
        1024: { 
          slidesPerView: 3,
          spaceBetween: 30,  // Default space for larger screens
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="swiper-slider">
          <CarouselCard photo={card.photo} text={card.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArtOfConnecting;
