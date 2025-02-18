import React from 'react';
import './home.css';
import Typography from "@mui/material/Typography";

const CarouselCard: React.FC<{ photo: string; text: { title: string; subtitle: string; text: string } }> = ({
                                                                                                                photo,
                                                                                                                text,
                                                                                                            }) => {
    return (
        <div className="carousel-card">
            {/* Photo Section */}
            <div className="carousel-card-photo">
                <img src={photo} alt="Card visual"/>
            </div>

            {/* Text Section */}
            <div className="carousel-card-text">
                <Typography variant="h3">{text.title}</Typography>
                <Typography variant="h5">{text.subtitle}</Typography>
                <Typography variant="body1">{text.text}</Typography>
            </div>
        </div>
    );
};

export default CarouselCard;