import React, { useEffect, useState } from "react";
import { GetData, PostData } from "../../Utility/API";
import StarRating from "../StarRating";
import verified from "../../assets/verified.png";
import Popup from "../Popup/Popup";
import DateConverter from "../DateFormat";
export default function Reviews(product_id) {
  const [reviewsDetails, setReviewsDeatils] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  //   ---------code for timestamp on card-----------

  let reviewerName;

  reviewsDetails?.reviews?.map((elem) => {
     return reviewerName = elem?.reviewerName;
   });

  //   ---------------existing reviews api call----------------

  const getReviewsTemplate = (response) => {
    setReviewsDeatils(response?.data?.results);
  };

  useEffect(()=>{
    GetData(
      "get_reviews",
      {
        product_id: product_id?.productId?._id,
      },
      getReviewsTemplate
    );
  },[])
  //   -----------code for popup open close-----------------
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const getReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };
  const handleSubmitReview = () => {
    PostData(
      "add_review",
      {
        product_id: product_id?.productId?._id,
        comment: reviewText,
        reviewerName: reviewerName,
        rating: rating,
      },
     
    );

    setIsPopupOpen(false);
  };

  return (
    <>
      {/* --------------code for existing Reveiws------------------ */}
      <div className="flex justify-between">
        <span>All Reviews</span>
        <button
          className="px-5 py-3 bg-black text-white rounded-full"
          onClick={openPopup}
        >
          Write a Review
        </button>
      </div>
      <div className="reviewsWrapper grid grid-cols-2 gap-6">
        {reviewsDetails?.map((elem) => {
          return (
            <div className="reviewCard border rounded-lg flex flex-col gap-2 p-4">
              <span className="reviewRating">
                <StarRating rating={elem?.rating} />
              </span>

              <span className="font-semibold flex gap-2 items-center">
                {elem?.reviewerName}
                <img src={verified} />
              </span>
              <span className="">{elem?.comment}</span>
              <span><DateConverter dateFormat={elem?.updatedAt}/></span>
            </div>
          );
        })}
      </div>
      {/* -------------------code for Add Reviews---------------------------- */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="flex w-full gap-4">
          <img className="w-1/3" src={product_id?.productId?.front_image} />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span>{product_id?.productId?.name}</span>
            </div>
            <div>
              <h2>How would you rate this product : {rating} stars</h2>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-4xl ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <span className="font-semibold">Write Review</span>
            <textarea
              className="border p-4 rounded-md"
              placeholder="Start writing here..."
              onChange={getReviewTextChange}
              value={reviewText}
            ></textarea>
            <span>
              You can write about the fit,material quality,colour,comfort etc.
              Refrain from mentioning delivery or packaging related feedback.
            </span>
            <button
              className=" px-4 py-2 bg-black text-white rounded-full"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
