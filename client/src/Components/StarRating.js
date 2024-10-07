import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = rating;

  const roundedRating = Math.round(rating * 2) / 2;

  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starValue = index + 0.5;

    return (
      <span
        key={index}
        className={`star ${
          starValue <= roundedRating ? "filled" : ""
        } text-yellow-400 text-xl`}
      >
        <i class="fa-solid fa-star"></i>
      </span>
    );
  });

  return <div className="star-rating flex gap-1">{stars}</div>;
};

export default StarRating;
