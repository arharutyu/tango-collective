import React from 'react';
import './home.css'; // Import the CSS file

const CarouselCard = ({ photo, text }) => {
  return (
    <div className="carousel-card">
      {/* Photo Section */}
      <div className="carousel-card-photo">
        <img src={photo} alt="Card visual" />
      </div>

      {/* Text Section */}
      <div className="carousel-card-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
