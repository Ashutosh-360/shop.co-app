import React, { useEffect, useState } from "react";
import { GetData, PostData } from "../../Utility/API";
import StarRating from "../StarRating";
import verified from "../../assets/verified.png";
import Popup from "../Popup/Popup";
import DateConverter from "../DateFormat";
import useLoader from "../../Utility/CustomHooks/useLoader";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
export default function Reviews({ productDetails }) {
  const [reviewsDetails, setReviewsDetails] = useState({});
  const authToken = useSelector((state) => state.auth.authToken);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { showLoader } = useLoader();

  const navigate = useNavigate();

  //   ---------------existing reviews api call----------------

  const getReviewsTemplate = (response) => {
    showLoader(false);
    setReviewsDetails(response?.data?.results);
  };

  const callGetReviewsApiHandler = () => {
    showLoader(true);
    GetData(
      "get_reviews",
      {
        product_id: productDetails?._id,
      },
      getReviewsTemplate
    );
  };
  useEffect(() => {
    callGetReviewsApiHandler();
  }, []);
  //   -----------code for popup open close-----------------
  const openPopup = () => {
    if (!authToken) {
      navigate("/login");
      return;
    }
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
    showLoader(true);
    PostData(
      "add_review",
      {
        product_id: productDetails?._id,
        comment: reviewText,
        rating: rating,
      },
      updateReviewHandler
    );
  };

  const updateReviewHandler = (response) => {
    showLoader(false);
    setIsPopupOpen(false);
    if (response.data.success) {
      callGetReviewsApiHandler();
    }
  };
console.log(reviewsDetails)
  return (
    <>
      {/* --------------code for existing Reveiws------------------ */}
      <div className="flex justify-between items-center py-2">
        <div className="font-semibold text-xl">
          All Reviews {`(${reviewsDetails?.count})`}
        </div>

        <button
          className="px-5 py-3  bg-black text-white rounded-full"
          onClick={openPopup}
        >
          Write a Review
        </button>
      </div>
      <div className="reviewsWrapper grid grid-cols-2 gap-6">
        {reviewsDetails?.reviews?.length>0 && reviewsDetails?.reviews?.map((elem) => {
          return (
            <div className="reviewCard border rounded-xl flex flex-col gap-2 p-6">
              <span className="reviewRating">
                <StarRating rating={elem?.rating} />
              </span>

              <span className="font-semibold flex gap-2 items-center">
                {elem?.reviewerName}
                <img src={verified} />
              </span>
              <span className="text-faint_text">{elem?.comment}</span>
              <div className="font-semibold text-faint_text">
                <DateConverter dateFormat={elem?.updatedAt} />
              </div>
            </div>
          );
        })}
      </div>
      {/* -------------------code for Add Reviews---------------------------- */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="flex w-full gap-4 z-10">
          <img className="w-1/3" src={productDetails?.front_image} />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div>{productDetails?.name}</div>
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
              className="border p-4 rounded-md outline-none"
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
