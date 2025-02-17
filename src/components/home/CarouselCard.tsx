import React from 'react';
import './home.css'; // Import the CSS file

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
                <p>{text.title}</p> {/* Display the title */}
                <p>{text.subtitle}</p> {/* Display the subtitle */}
                <p>{text.text}</p> {/* Display the main text */}
            </div>
        </div>
    );
};

export default CarouselCard;