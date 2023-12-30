import React from "react";
import { PostData } from "../../Utility/API";

function AddReview() {
  const reviewData = {
    product_id: "6590520bcb1a75b5882b3a89", // Replace with the actual product ID
    reviewerName: "Alice Smith",
    rating: 3.8,
    comment: `
      I have mixed feelings about this product. On the positive side, the design is unique,
      and it does serve its purpose well. However, I found the build quality to be somewhat
      lacking. After a few weeks of use, I noticed some wear and tear. It's a decent product,
      but I expected a bit more in terms of durability. The customer service, on the other hand,
      was responsive and helpful when I reached out with my concerns.
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
