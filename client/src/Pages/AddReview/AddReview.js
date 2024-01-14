import React from "react";
import { PostData } from "../../Utility/API";

function AddReview() {
  const reviewData = {
    product_id: "65944e9710c2a53fa96ee526", // Replace with the actual product ID
    reviewerName: "Ashutosh Naik",
    rating: 4.9,
    comment: `
    The moment I put it on, I could feel the softness of the cotton against my skin. The fabric is breathable, making it ideal for all-day wear. Whether I'm running errands or relaxing at home, this T-shirt keeps me comfortable without sacrificing style.
    `,
  };
  const addReviewHandler = () => {
    PostData("add_review", reviewData, updateReviewHandler);
  };

  const updateReviewHandler = (res) => {};
  return (
    <button onClick={addReviewHandler} className="bg-black text-white text-lg rounded p-3">
      Add Review
    </button>
  );
}

export default AddReview;
