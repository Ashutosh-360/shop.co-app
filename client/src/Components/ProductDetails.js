import React, { useState } from "react";
import tshirt from "../assets/tshirts.png";
import tshirtback from "../assets/tshirtback.png";
import tshirtfront from "../assets/tshirtfront.png";
import tshirtmen from "../assets/tshirtmen.png";
import arrow from "../assets/arrow.png";
import Star from "../assets/Star.png";
import halfstar from "../assets/halfstar.png";
import Header from "./Header";
import style from "./ProductDetails.css";
import StarRating from "./StarRating";

export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState({ tshirtfront });
  const [bigImgToShow, setBigImgToShow] = useState(tshirtfront);
  const [isSelected, setIsSelected] = useState(1);
  const [imgToShow, setImgToShow] = useState([
    tshirtfront,
    tshirtback,
    tshirtmen,
  ]);

  // const [rating, setRating] = useState(0);
  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };
  const changeImg = (ele, index) => {
    setIsSelected(index + 1)
    setBigImgToShow(ele);
  }

  return (
    <>
      <div className="productDetailsWrapper flex gap-4 w-full max-w-screen-xl m-auto ">
        <div className="productImgLeftContainer w-1/2">
          <div className="navigationBar  py-6 flex gap-2 items-center">
            Home <img className="w-2 h-fit" src={arrow} /> Shop{" "}
            <img className="w-2 h-fit" src={arrow} /> Men{" "}
            <img className="w-2 h-fit" src={arrow} /> T-shirts{" "}
          </div>

          <div className="flex gap-6">
            <div className="smImgsContainer flex flex-col gap-8">
              {imgToShow.map((ele, index) => {
                return (
                  <img
                    onClick={() => changeImg(ele, index)}

                    className={`productLeftImgs rounded-2xl w-36`}
                    src={ele}
                  />
                );
              })}
            </div>
            <div>
              <img className="productRightImgs rounded-xl" src={bigImgToShow} />
            </div>
          </div>
        </div>
        <div className="detailsRIghtContainer">
          <div className="productNameContainer text-4xl font-extrabold  pt-20 pl-3">
            ONE LIFE GRAPHIC T-SHIRT
          </div>
          <div className="ratingContainer">
            {/* <StarRating
              initialRating={rating}
              onRatingChange={handleRatingChange}
            />
            <p>Current Rating: {rating}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
