import React from 'react';

const StarRating = ({ rating }) => {
  const maxStars = rating;

  const roundedRating = Math.round(rating * 2) / 2;

  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starValue = index + 0.5;

    return (
      <span
        key={index}
        className={`star ${starValue <= roundedRating ? 'filled' : ''}`}
      >
        &#9733; 
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
